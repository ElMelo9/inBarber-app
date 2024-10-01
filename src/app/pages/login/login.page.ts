import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI, LoginResponse } from 'src/app/interfaces/login.interface';
import { LoginService } from '../../services/login/login.service';
import {saveToLocalStorage }from '../../helpers/storage-helper';
import { AlertController } from '@ionic/angular';
import { decodeTokenPayload } from 'src/app/helpers/jwt-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private alertController: AlertController  
  ) { 
    this.loginForm = this.fb.group({
      email_usuario: ['', [Validators.required, Validators.email]],
      password_usuario: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
  }

  onLogin(form: LoginI) {
    this.loginService.login(form).subscribe({
      next: (response: LoginResponse) => {
        this.dataHelpper(response)
        this.router.navigate(['tabs'])
        this.alert('Inicio de session existo!')

      },
      error: (error) => {
        console.error('Error en el login', error);  // Manejar el error aquí
        this.alert('hubo un error al iniciar session')
      },
      complete: () => {

      }
    });
  }
  dataHelpper(response: LoginResponse){
    saveToLocalStorage("token", response.token_usuario)
    saveToLocalStorage("tipo",response.token_tipo)
    const tokenPayload =decodeTokenPayload(response.token_usuario)
   console.log(tokenPayload)
    saveToLocalStorage("exp", tokenPayload.exp)
    saveToLocalStorage("nombre_usuario", tokenPayload.Nombre_usuario)
    saveToLocalStorage("id_usuario", tokenPayload.id_usuario)
    saveToLocalStorage("rol", tokenPayload.rol)
    saveToLocalStorage("email", tokenPayload.email)

  }

  async alert(mensaje: string) {
    const alert = await this.alertController.create({
      message: mensaje,
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

}
