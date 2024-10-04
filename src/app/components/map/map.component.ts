import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; // Solo si usas Capacitor
import { getFromLocalStorage } from 'src/app/helpers/storage-helper';
import { UbicacionCreate, UbicacionResponse } from 'src/app/interfaces/ubicacio.interface';
import { UbicacionService } from 'src/app/services/ubicacion/ubicacion.service';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true
})
export class MapComponent implements OnInit {

  @ViewChild('map', { static: true }) mapElementRef!: ElementRef;
  center = { lat: 10.994717, lng: -74.791329 };
  map: any;
  marker: any;
  private renderer = inject(Renderer2);

  ubicacion!: UbicacionCreate



  constructor(private ubicacionService: UbicacionService) { }

  ngOnInit() {
    this.locateMe()
    this.loadMap();
   }

  async loadMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const mapEl = this.mapElementRef.nativeElement;
    const location = new google.maps.LatLng(this.center.lat, this.center.lng);
    
    this.map = new Map(mapEl, {
      center: location,
      zoom: 14,
      mapId: "4504f8b37365c3d0",
    });

    this.renderer.addClass(mapEl, 'visible');
    this.addMarker(location);
  }

  async addMarker(location: any) {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const markerIcon = document.createElement('img');
    markerIcon.src = 'assets/img/ubicacion.gif';
    markerIcon.height = 64;
    markerIcon.width = 64;

    this.marker = new AdvancedMarkerElement({
      map: this.map,
      position: location,
      gmpDraggable: true,
      content: markerIcon,
    });
  }

  // Función para obtener la ubicación actual
  async locateMe() {
    try {
      const position = await Geolocation.getCurrentPosition(); // Usar Capacitor
      const location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.updateMap(location);
    } catch (error) {
      alert('Please enable the location!');
    }
  }

  // Función para actualizar el mapa y el marcador
  updateMap(location: { lat: number, lng: number }) {
    const newLocation = new google.maps.LatLng(location.lat, location.lng);
    this.map.setCenter(newLocation);
    this.map.setZoom(14);

    if (this.marker) {
      this.marker.position = newLocation;
      this.ubicacion={
        id_usuario: getFromLocalStorage("id_usuario"),
        longitud_ubicacion: location.lat.toString(),
        latitud_ubicacion: location.lng.toString()
      }
      console.log(this.ubicacion);
      this.ubicacionService.insert(this.ubicacion).subscribe({
        next: (response: UbicacionResponse) => {
          console.log(response);
        },
        error: (error) => {
          console.error('Error al insertar el servicio', error);  // Manejar el error aquí
        },
        complete: () => {
  
        }
      });
    } else {
      this.addMarker(newLocation);
    }
  }
}
