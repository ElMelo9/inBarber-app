import { Component } from '@angular/core';
import { ServicioService } from '../services/servicio/servicio.service';
import { TipoServicioService } from '../services/tipoServicio/tipo-servicio.service';
import { EstadoServicioService } from '../services/estadoServicio/estado-servicio.service';
import { EstadoServicioResponse } from '../interfaces/estadoServicio.inteface';
import { TipoServicioResponse } from '../interfaces/tipoServicio.interface';
import { getFromLocalStorage } from '../helpers/storage-helper';
import { ServicioResponse } from '../interfaces/servicio.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  estadoServicio: EstadoServicioResponse[] = [];
  tipo: TipoServicioResponse[] = [];
  idUsuario!: number
  servicios: ServicioResponse[] = [];


  constructor(
    private estadoService: EstadoServicioService,
    private tipoServicio: TipoServicioService,
    private servicio: ServicioService
  ) {}

  ngOnInit() {
    this.idUsuario = getFromLocalStorage('id_usuario')
    this.estadoGetAll();
    this.tipoServicioGetAll();
    this.getServicios(this.idUsuario)

  }

  estadoGetAll() {
    this.estadoService.getAll().subscribe({
      next: (response: EstadoServicioResponse[]) => {
        //console.log(response);
        this.estadoServicio = response

      },
      error: (error) => {
        console.error('Error al obtener los estados', error);  // Manejar el error aquí
      },
      complete: () => {

      }
    });
  }

  getServicios(id_usuario: number){
    this.servicio.getByUsuario(id_usuario).subscribe({
      next: (response: ServicioResponse[]) => {
        //console.log(response);
        this.servicios = response

      },
      error: (error) => {
        console.error('Error al obtener los servicios del usuario', error);  // Manejar el error aquí
      },
      complete: () => {

      }
    });

  }

  tipoServicioGetAll() {

    this.tipoServicio.getAll().subscribe({
      next: (response: TipoServicioResponse[]) => {
        //console.log(response);
        this.tipo = response

      },
      error: (error) => {
        console.error('Error al obtener los tipo de servicios ', error);  // Manejar el error aquí
      },
      complete: () => {

      }
    });

  }

  getNombreServicio(id: number): string | undefined {
    const servicio = this.tipo.find(s => s.id_tipo_servicio === id);
    return servicio ? servicio.nombre_tipo_servicio : 'Servicio no encontrado';
  }

  

}
