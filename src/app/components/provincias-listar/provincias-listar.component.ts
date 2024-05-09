import { Component } from '@angular/core';
import { Provincia } from 'src/app/models/provinciaModel';
import { Router } from '@angular/router';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-provincias-listar',
  templateUrl: './provincias-listar.component.html',
  styleUrls: ['./provincias-listar.component.css']
})
export class ProvinciasListarComponent {

  constructor(private provinciasService: ProvinciasService,
    private router:Router) {
    this.provincias = provinciasService.listarProvincias();
    console.log(this.provincias)
  }

  provincias: Provincia[];
  revelar: boolean = false;
  seleccionMult: any[] = [];
}
