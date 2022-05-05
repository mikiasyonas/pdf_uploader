import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Pdf, Prisma } from '@prisma/client';

@Injectable()
export class PdfService {
  constructor(private prisma: PrismaService) {}

  async pdfs(): Promise<Pdf[]> {
    return this.prisma.pdf.findMany();
  }

  async pdf(
    pdfWhereUniqueInput: Prisma.PdfWhereUniqueInput,
  ): Promise<Pdf | null> {
    return this.prisma.pdf.findUnique({
      where: pdfWhereUniqueInput,
    });
  }
  async createPdf(data: Prisma.PdfCreateInput): Promise<Pdf> {
    return this.prisma.pdf.create({
      data,
    });
  }

  async deletePdf(where: Prisma.PdfWhereUniqueInput): Promise<Pdf> {
    return this.prisma.pdf.delete({
      where,
    });
  }
}
