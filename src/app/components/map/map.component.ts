import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; // Solo si usas Capacitor

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

  constructor() { }

  ngAfterViewInit() {
    this.loadMap();
  }

  ngOnInit() {
    this.locateMe()
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
    } else {
      this.addMarker(newLocation);
    }
  }
}
