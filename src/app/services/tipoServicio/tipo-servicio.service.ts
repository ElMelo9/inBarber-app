import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { createHeaders } from 'src/app/helpers/auth-helper';
import { TipoServicioCreate, TipoServicioResponse, TipoServicioUpdate } from 'src/app/interfaces/tipoServicio.interface';


@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {


  private apiUrl = environment.apiUrl + 'TipoServicio';

  constructor(private http: HttpClient) { }


  getAll(){
    const headers = createHeaders()
    return this.http.get<TipoServicioResponse[]>(`${this.apiUrl}/getAll`,{ headers })
  }

  insert(tipo: TipoServicioCreate){
    const headers = createHeaders()
    return this.http.post<TipoServicioResponse>(`${this.apiUrl}/insert`, tipo,{ headers })

  }

  update(id:number,tipo:TipoServicioUpdate) { 
    const headers = createHeaders()
    return this.http.put<TipoServicioResponse>(`${this.apiUrl}/update/${id}`,tipo,{ headers })

  }

  delete(id:number){
    const headers = createHeaders()
    return this.http.put<boolean>(`${this.apiUrl}/delelte/${id}`,{ headers })
  }
}
