import { Component } from '@angular/core';
import { usuarioResponse } from '../interfaces/usuario.inteface';
import { ServicioResponse } from '../interfaces/servicio.interface';
import { UsuarioService } from '../services/usuarioServicio/usuario.service';
import { ServicioService } from '../services/servicio/servicio.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  usuario!: usuarioResponse
  servicios:ServicioResponse[]=[]

  constructor(
    private usuarioService: UsuarioService,
    private servicio: ServicioService,
  ) {}

}
