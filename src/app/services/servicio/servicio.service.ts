import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable} from 'rxjs';
import { ServicioCreate, ServicioResponse, ServicioUpdate } from 'src/app/interfaces/servicio.interface';
import { createHeaders } from 'src/app/helpers/auth-helper';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl = environment.apiUrl + 'servicio';

  constructor(private http: HttpClient) { }

  insert(servicio: ServicioCreate){
    const headers = createHeaders()
    return this.http.post<ServicioResponse>(`${this.apiUrl}/insert`, servicio,{ headers })

  }

  getByUsuario(id:number){
    const headers = createHeaders()
    return this.http.get<ServicioResponse[]>(`${this.apiUrl}/getByUser/${id}`,{ headers })
    
  }

  update(id:number,servicio:ServicioUpdate){
    const headers = createHeaders()
    return this.http.put<ServicioResponse>(`${this.apiUrl}/update/${id}`,servicio,{ headers })

  }

  delete(id:number){
    const headers = createHeaders()
    return this.http.put<boolean>(`${this.apiUrl}/delelte/${id}`,{ headers })
  }

}
