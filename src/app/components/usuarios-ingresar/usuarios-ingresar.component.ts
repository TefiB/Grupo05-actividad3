import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuarioModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-ingresar',
  templateUrl: './usuarios-ingresar.component.html',
  styleUrls: ['./usuarios-ingresar.component.css']
})
export class UsuariosIngresarComponent {

  constructor(private usuariosService: UsuariosService, private router: Router) {   }
  nuevo: Usuario = {};
  revelar: boolean = false;


  validarCampos() {
    if (this.usuariosService.validarCredenciales(this.nuevo)) {
      this.revelar = false;
      this.ingresar();
    } else {
      this.revelar = true;
    }
  }

  ingresar() {
    console.log("Ingresando...");
    const usuarioAutenticado = this.usuariosService.listarUsuarios().find(u => u.nombre === this.nuevo.nombre);
    if (usuarioAutenticado) {
      this.usuariosService.iniciarSesion(usuarioAutenticado); // Actualizar estado de autenticación
      this.router.navigate(['usuarios/home']);
    }
  }

  limpiarUsuario() {
    this.nuevo.nombre = "";
  }

  limpiarPassword() {
    this.nuevo.password = "";
  }

  reintentar() {
    this.revelar = false;
  }
}
