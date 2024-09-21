// helpers/auth-helper.ts
import { HttpHeaders } from '@angular/common/http';
import { getFromLocalStorage } from './storage-helper';

export function createHeaders(): HttpHeaders {
  const token = getFromLocalStorage("token");
  if (token) {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  } else {
    // Manejar el caso cuando no hay token almacenado, como lanzar un error o devolver un objeto HttpHeaders vacío
    return new HttpHeaders();
  }
}