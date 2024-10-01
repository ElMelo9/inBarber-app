import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { createHeaders } from 'src/app/helpers/auth-helper';
import { environment } from 'src/environments/environment';
import { UbicacionCreate, UbicacionResponse, UbicacionUpdate } from '../../interfaces/ubicacio.interface';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  private apiUrl = environment.apiUrl + 'ubicacion';

  constructor(private http: HttpClient) { }

  insert(ubicacion:UbicacionCreate){
    const headers = createHeaders()
    return this.http.post<UbicacionResponse>(`${this.apiUrl}/insert`, ubicacion,{ headers })
  }

  getById(id:number){
    const headers = createHeaders()
    return this.http.get<UbicacionResponse>(`${this.apiUrl}/getById/${id}`,{ headers })
  }

  update(id:number,ubicacion:UbicacionUpdate){
    const headers = createHeaders()
    return this.http.get<UbicacionResponse>(`${this.apiUrl}/update/${id}`,{ headers })
  }

  delete(id:number){
    const headers = createHeaders()
    return this.http.get<boolean>(`${this.apiUrl}/delete/${id}`,{ headers })
  }


}
