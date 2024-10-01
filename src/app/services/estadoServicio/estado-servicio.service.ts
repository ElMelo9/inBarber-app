import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { createHeaders } from 'src/app/helpers/auth-helper';
import { EstadoServicioCreate, EstadoServicioResponse, EstadoServicioUpdate } from 'src/app/interfaces/estadoServicio.inteface';

@Injectable({
  providedIn: 'root'
})
export class EstadoServicioService {


  private apiUrl = environment.apiUrl + 'estado';

  constructor(private http: HttpClient) { }


  getAll(){
    const headers = createHeaders()
    return this.http.get<EstadoServicioResponse[]>(`${this.apiUrl}/getAll`,{ headers })
  }

  insert(estado: EstadoServicioCreate){
    const headers = createHeaders()
    return this.http.post<EstadoServicioResponse>(`${this.apiUrl}/insert`, estado,{ headers })

  }

  update(id:number,estado:EstadoServicioUpdate) { 
    const headers = createHeaders()
    return this.http.put<EstadoServicioResponse>(`${this.apiUrl}/update/${id}`,estado,{ headers })

  }

  delete(id:number){
    const headers = createHeaders()
    return this.http.put<boolean>(`${this.apiUrl}/delelte/${id}`,{ headers })
  }
}
