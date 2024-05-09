import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from "src/app/models/usuarioModel";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URI = 'http://localhost:3000/user';
  usuarios: Usuario[];

  constructor(/*private http: HttpClient*/) {

    this.usuarios = [{
      "id": "1",
      "nombre": "Pedro",
      "email": "pedro@email.net",
      "password": "123456",
      "rol": "admin"
    }, {
      "id": "2",
      "nombre": "Juan",
      "email": "juan@email.net",
      "password": "123456",
      "rol": "usuario"
    }, {
      "id": "3",
      "nombre": "Hugo",
      "email": "hugo@email.net",
      "password": "123456",
      "rol": "usuario"
    }, {
      "id": "4",
      "nombre": "Carlos",
      "email": "carlos@email.net",
      "password": "123456",
      "rol": "admin"
    }, {
      "id": "5",
      "nombre": "Maria",
      "email": "maria@email.net",
      "password": "123456",
      "rol": "admin"
    }];
  }

  listarUsuarios() {
    return this.usuarios;
  }

  buscarUsuario(id: string) {
  }

  guardarUsuarios(usuariosGuardar: Usuario[]) {
    this.usuarios = usuariosGuardar;
  }

  guardarUsuariosLocal() {
    localStorage.setItem("Usuarios", JSON.stringify(this.usuarios));
  }

  cargarUsuariosLocal() {
    this.usuarios = JSON.parse(localStorage.getItem("Usuarios") || '{}');
  }

  setToken() {
    localStorage.setItem('token', 'LogInOK');
  }

  isLoggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }

  private usuarioAutenticado: Usuario | undefined;

  iniciarSesion(usuario: Usuario) {
    this.usuarioAutenticado = usuario;
    localStorage.setItem('token', 'LogInOK');
  }

  validarCredenciales(usuario: Usuario): boolean {
    const usuarioEncontrado = this.usuarios.find(u => u.nombre === usuario.nombre && u.password === usuario.password);
    return !!usuarioEncontrado;
  }

  setUsuarioAutenticado(usuario: Usuario) {
    this.usuarioAutenticado = usuario;
    console.log('Usuario autenticado:', this.usuarioAutenticado);
  }

  getRolUsuarioAutenticado(): string | undefined {
    return this.usuarioAutenticado?.rol;
  }
}
