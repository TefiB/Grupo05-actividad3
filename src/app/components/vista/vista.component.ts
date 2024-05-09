import { Component } from '@angular/core';
import { Usuario } from "src/app/models/usuarioModel";
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {

  titulo: String = "Vista formulario";

  usuarios: Usuario[];
  revelar: boolean = false;
  seleccionMult: any[] = [];

  constructor(private usuariosService: UsuariosService,
    private router: Router) {
    this.usuarios = usuariosService.listarUsuarios();
    console.log(this.titulo);
    console.log(this.usuarios)
  }

  procesar(): void {
    let listaUsuarios: Usuario[] = [];
    console.log("Uso de procesar");
    console.log("Capturando el formulario");

    this.seleccionMult.forEach(valorArray => {
      for (let i = 0; i < this.usuarios.length; i++) {
        if (valorArray == this.usuarios[i].id) {
          listaUsuarios.push(this.usuarios[i]);
          break;
        }
      }
    });
    console.log(listaUsuarios);    
    this.usuariosService.guardarUsuarios(listaUsuarios);
    this.usuariosService.guardarUsuariosLocal();

    this.router.navigate(['usuarios/listar']);
  }
  addRemoveItem($event: any): void {
    console.log("Capturando el checkbox");
    if ($event.target.checked) {
      this.seleccionMult.push($event.target.value);
    }
    else {
      this.seleccionMult.splice(this.seleccionMult.indexOf($event.target.value), 1);
    }
    this.seleccionMult.sort();
    console.log(this.seleccionMult);
  }



  ngOnInit(): void {
    //this.titulo=2.3;
  }
}
