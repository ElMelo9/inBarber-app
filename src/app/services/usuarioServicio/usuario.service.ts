import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { usuarioCreate, usuarioResponse, usuarioUpdate } from 'src/app/interfaces/usuario.inteface';
import { createHeaders } from 'src/app/helpers/auth-helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = environment.apiUrl + 'usuarios';

  constructor(private http: HttpClient) { }

  insert(usuario: usuarioCreate){
    const headers = createHeaders()
    return this.http.post<usuarioResponse>(`${this.apiUrl}/insert`, usuario,{ headers })

  }

  getById(id:number){
    const headers = createHeaders()
    return this.http.get<usuarioResponse>(`${this.apiUrl}/getById/${id}`,{ headers })
    
  }

  update(id:number,usuario:usuarioUpdate){
    const headers = createHeaders()
    return this.http.put<usuarioResponse>(`${this.apiUrl}/update/${id}`,usuario,{ headers })

  }

  delete(id:number){
    const headers = createHeaders()
    return this.http.delete<boolean>(`${this.apiUrl}/delete/${id}`,{ headers })
  }
}
