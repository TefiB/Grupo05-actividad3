import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-home',
  templateUrl: './usuarios-home.component.html',
  styleUrls: ['./usuarios-home.component.css']
})
export class UsuariosHomeComponent {

  constructor(private usuariosService: UsuariosService) { }

  isAdmin(): boolean {
    const rol = this.usuariosService.getRolUsuarioAutenticado();
    console.log('Rol:', rol);
    return rol === 'admin';
  }
}
