import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { EstadoServicioResponse } from '../interfaces/estadoServicio.inteface';
import { ServicioResponse } from '../interfaces/servicio.interface';
import { EstadoServicioService } from '../services/estadoServicio/estado-servicio.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  isModalOpenService = false;
  isModalOpenProgramar = false;
  isModalOpenSolicitar = false;
  precio_servicio: number | null = null;
  tooltipInterval: any; // Variable para almacenar el intervalo
  tooltipVisible: boolean = true; // Controla la visibilidad del tooltip
  tooltipActive: boolean = true; // Estado de ejecución del intervalo
  isAlertOpen = false;
  alertButtons = ['Action'];

  estadoServicio:EstadoServicioResponse[] = [];
  servico:ServicioResponse[] = []; 


  constructor(private estadoService:EstadoServicioService) { }

  ngOnInit() {
    // Iniciar el intervalo para mostrar/ocultar el tooltip
    this.startTooltipInterval();
    this.estadoGetAll();
    //this.tipoServicioGetAll();

  }

  estadoGetAll(){
    this.estadoService.getAll().subscribe({
      next: (response: EstadoServicioResponse[]) => {
        console.log(response);
        this.estadoServicio=response

      },
      error: (error) => {
        console.error('Error al obtener los estados', error);  // Manejar el error aquí
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


}
