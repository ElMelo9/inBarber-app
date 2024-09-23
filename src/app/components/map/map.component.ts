import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild, } from '@angular/core';

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
  map: any
  marker: any
  mapListener: any
  markerListener: any
  intersectionObserver: any
  private renderer = inject(Renderer2)

  constructor() { }

  ngAfterViewInit() {
    this.loadMap();
  }

  ngOnInit() { }

  async loadMap() {
    const { Map } = await google.maps.importLibrary("maps")
    const mapEl = this.mapElementRef.nativeElement
    const location = new google.maps.LatLng(this.center.lat, this.center.lng)
    this.map = new Map(mapEl, {
      center: location,
      zoom: 14,
      mapId: "4504f8b37365c3d0",
      // scaleControl: true,
      //streetViewControl: true,
      //zoomControl: true,
      //overiewMapControl: true,
      //maptypeControl:false,
      //fullscreenControl:false,

    })
    this.renderer.addClass(mapEl,'visible')
    this.addMarker(location)
  }

  async addMarker(location: any){

   // this.marker = new google.maps.Marker({
    //        map:this.map,
      //position: location,
      //gmpDraggable: true,
      //animation: google.maps.Animation.DROP
    //})
   
   
    const { AdvancedMarkerElement,PinElement } = await google.maps.importLibrary("marker")

    const markerPin = new PinElement ({
      background:"#76ba1b",
      scale:1,
      borderColor:"#137333",
      glyphColor:"#137333",

    })

    this.marker = new AdvancedMarkerElement({
      map:this.map,
      position: location,
      gmpDraggable: true,
      content: markerPin.element
    })

  }
}
