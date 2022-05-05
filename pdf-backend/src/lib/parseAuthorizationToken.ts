export function parseHeader(authToken: string): string | boolean {
  if (!authToken || authToken == '') {
    return false;
  }

  const authorizationSplitted = authToken.split(' ');

  if (!authorizationSplitted[0] || authorizationSplitted[0] != 'Bearer') {
    return false;
  }

  if (!authorizationSplitted[1]) {
    return false;
  }

  return authorizationSplitted[1];
}
