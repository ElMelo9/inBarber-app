import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private servicio: ServicioService,
    private router: Router
  ) {}

  

  ngOnInit() {
    this.idUsuario = getFromLocalStorage('id_usuario')
    this.estadoGetAll();
    this.tipoServicioGetAll();
    this.getServicios(this.idUsuario)

  }
  ionViewWillEnter() {
    this.ngOnInit() ;
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

  getProgressValue(idEstadoServicio: number): number {
    if (idEstadoServicio >= 3) {
      return 1.0;
    } else if (idEstadoServicio >= 2) {
      return 0.5;
    } else if (idEstadoServicio >= 1) {
      return 0.10;
    } else {
      return 0;
    }
  }
  
  getProgressBuffer(idEstadoServicio: number): number {
    if (idEstadoServicio >= 3) {
      return 1.0;
    } else if (idEstadoServicio >= 2) {
      return 0.75;
    } else if (idEstadoServicio >= 1) {
      return 0.5;
    } else {
      return 0;
    }
  }
  
  eliminarServicio(id: number) {
    this.servicio.delete(id).subscribe({
      next: () => {
        // Filtra el servicio eliminado de la lista de servicios actual
        this.servicios = this.servicios.filter(service => service.id_servicio !== id);
        console.log(`Servicio con ID ${id} eliminado exitosamente.`);
      },
      error: (error) => {
        console.error('Error al eliminar el servicio del usuario', error);  // Manejar el error aquí
      },
      complete: () => {
        console.log('Eliminación de servicio completada.');
      }
    });
  }
  

}
