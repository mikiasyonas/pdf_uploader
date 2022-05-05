import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  // Put,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';

import { PdfService } from './pdf.service';

import { Pdf as PdfModel } from '@prisma/client';
import { AppService } from './app.service';
import { AuthGuard } from './auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pdfService: PdfService,
  ) {}

  @Get('pdf')
  async getAllPdfs(): Promise<PdfModel[]> {
    return this.pdfService.pdfs();
  }

  @Get('pdf/:id')
  async getPdfById(@Param('id') id: string): Promise<PdfModel> {
    return this.pdfService.pdf({
      id: Number(id),
    });
  }

  @Post('pdf')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'public',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');

          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async createPdf(
    @Body() pdfData: { path: string; comment: string },
    @UploadedFile() file: Express.Multer.File,
  ): Promise<PdfModel> {
    console.log(file);
    const { comment } = pdfData;

    return this.pdfService.createPdf({
      path: file.filename,
      comment,
    });
  }

  @Delete('pdf/:id')
  async deletePdf(@Param('id') id: string): Promise<PdfModel> {
    return this.pdfService.deletePdf({
      id: Number(id),
    });
  }
}
