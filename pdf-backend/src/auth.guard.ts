import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { parseHeader } from './lib/parseAuthorizationToken';

function validateRequest(request): boolean {
  const { authorization } = request.headers;

  console.log('auth', authorization);
  const token = parseHeader(authorization);

  if (!token) {
    return false;
  }

  return true;
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return validateRequest(request);
  }
}
