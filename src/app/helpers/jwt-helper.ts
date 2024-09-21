import { JwtHelperService } from '@auth0/angular-jwt';

// Instancia de JwtHelperService
const jwtHelper = new JwtHelperService();

/**
 * Función para decodificar el payload de un token JWT.
 * @param token - El token JWT a decodificar.
 * @returns El payload del token o null si no se pudo decodificar.
 */
export function decodeTokenPayload(token: string): any {
  try {
    return jwtHelper.decodeToken(token); // Decodifica el payload del token
  } catch (e) {
    console.error('Error decoding token:', e);
    return null;
  }

  
}