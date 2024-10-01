import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { createHeaders } from 'src/app/helpers/auth-helper';
import { EstadoServicioCreate, EstadoServicioResponse } from 'src/app/interfaces/estadoServicio.inteface';

@Injectable({
  providedIn: 'root'
})
export class EstadoServicioService {


  private apiUrl = environment.apiUrl + 'estado';

  constructor(private http: HttpClient) { }

  insert(estado: EstadoServicioCreate){
    const headers = createHeaders()
    return this.http.post<EstadoServicioResponse>(`${this.apiUrl}/insert`, estado,{ headers })

  }

  update(id:number,estado:EstadoServicioResponse) {
    const headers = createHeaders()
    return this.http.put<EstadoServicioResponse>(`${this.apiUrl}/update/${id}`,estado,{ headers })

  }

  delete(id:number){
    const headers = createHeaders()
    return this.http.put<boolean>(`${this.apiUrl}/delelte/${id}`,{ headers })
  }
}