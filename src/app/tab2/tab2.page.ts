import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { EstadoServicioResponse } from '../interfaces/estadoServicio.inteface';
import { ServicioCreate, ServicioResponse } from '../interfaces/servicio.interface';
import { EstadoServicioService } from '../services/estadoServicio/estado-servicio.service';
import { TipoServicioService } from '../services/tipoServicio/tipo-servicio.service';
import { TipoServicioResponse } from '../interfaces/tipoServicio.interface';
import { getFromLocalStorage } from '../helpers/storage-helper';
import { ServicioService } from '../services/servicio/servicio.service';
import { UbicacionService } from '../services/ubicacion/ubicacion.service';
import { UbicacionResponse } from '../interfaces/ubicacio.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  isModalOpenService = false;
  isModalOpenProgramar = false;
  isModalOpenSolicitar = false;
  precio_servicio!: number
  tooltipInterval: any; // Variable para almacenar el intervalo
  tooltipVisible: boolean = true; // Controla la visibilidad del tooltip
  tooltipActive: boolean = true; // Estado de ejecución del intervalo
  isAlertOpen = false;
  alertButtons = ['Action'];

  estadoServicio: EstadoServicioResponse[] = [];
  tipo: TipoServicioResponse[] = [];
  nuevoServicio!: ServicioCreate;
  ubicacionActual!: UbicacionResponse


  constructor(
    private estadoService: EstadoServicioService,
    private tipoServicio: TipoServicioService,
    private servicio: ServicioService,
    private ubicacionService: UbicacionService
  ) { }

  ngOnInit() {
    // Iniciar el intervalo para mostrar/ocultar el tooltip
    this.startTooltipInterval();
    this.estadoGetAll();
    this.tipoServicioGetAll();

  }

  estadoGetAll() {
    this.estadoService.getAll().subscribe({
      next: (response: EstadoServicioResponse[]) => {
        console.log(response);
        this.estadoServicio = response

      },
      error: (error) => {
        console.error('Error al obtener los estados', error);  // Manejar el error aquí
      },
      complete: () => {

      }
    });
  }

  tipoServicioGetAll() {

    this.tipoServicio.getAll().subscribe({
      next: (response: TipoServicioResponse[]) => {
        console.log(response);
        this.tipo = response

      },
      error: (error) => {
        console.error('Error al obtener los tipo de servicios ', error);  // Manejar el error aquí
      },
      complete: () => {

      }
    });

  }

  // Función para iniciar el intervalo
  startTooltipInterval() {
    const tooltip = document.getElementById('tooltip');

    this.tooltipInterval = setInterval(() => {
      if (tooltip?.classList.contains('show')) {
        tooltip.classList.remove('show');
      } else {
        tooltip?.classList.add('show');
      }
    }, 2000); // Cambia la visibilidad cada 2 segundos
  }

  // Función para detener el intervalo
  stopTooltipInterval() {
    clearInterval(this.tooltipInterval);
  }

  // Función para alternar la ejecución del intervalo
  toggleTooltip() {
    const tooltip = document.getElementById('tooltip');

    if (this.tooltipActive) {
      this.stopTooltipInterval();
      tooltip?.classList.remove('show'); // Ocultar el tooltip al detenerlo
    } else {
      this.startTooltipInterval();
    }

    this.tooltipActive = !this.tooltipActive; // Cambiar el estado
  }

  setOpenServices(isOpen: boolean) {
    this.isModalOpenService = isOpen;
  }

  setOpenProgramar(isOpen: boolean) {
    this.isModalOpenProgramar = isOpen;

  }
  setOpenSolicitar(isOpen: boolean) {
    this.isModalOpenSolicitar = isOpen;

  }

  setOpenAlert(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  preSolicitar(tipoServicio: number) {

    this.getUltimaUbicacion(getFromLocalStorage("id_usuario"))
    
    this.nuevoServicio = {
      id_usuario: getFromLocalStorage("id_usuario"),
      id_ubicacion: 0,
      id_estado_servicio: 1,
      id_tipo_servicio: tipoServicio,
      precio_servicio: 0
    }




  }

  solicitar() {

    this.nuevoServicio.precio_servicio = this.precio_servicio
    this.nuevoServicio.id_ubicacion= this.ubicacionActual.id_ubicacion,

    this.servicio.insert(this.nuevoServicio).subscribe({
      next: (response: ServicioResponse) => {
        console.log(response);

      },
      error: (error) => {
        console.error('Error al insertar el servicio', error);  // Manejar el error aquí
      },
      complete: () => {

      }
    });
  }

  getUltimaUbicacion(id_usuario: number) {
    this.ubicacionService.getByUser(id_usuario).subscribe({
      next: (response: UbicacionResponse) => {
        console.log(response);
        this.ubicacionActual = response

      },
      error: (error) => {
        console.error('Error al obtener la ultima ubicacion', error);  // Manejar el error aquí
      },
      complete: () => {
      }
    });

  }

}
