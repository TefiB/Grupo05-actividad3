import { Component } from '@angular/core';
import { Provincia } from 'src/app/models/provinciaModel';
import { ProvinciasService } from 'src/app/services/provincias.service';

@Component({
  selector: 'app-provincias-administrar',
  templateUrl: './provincias-administrar.component.html',
  styleUrls: ['./provincias-administrar.component.css']
})
export class ProvinciasAdministrarComponent {
  provincias: Provincia[];

  id_select: string = "0";
  indice: number = 0;

  nuevo: Provincia = {};
  nuevo_auxiliar: Provincia = {};

  errorNombre = 0;
  errorCapital = 0;
  errorDescripcion = 0;
  errorImagen = 0;

  actual: Provincia = {};
  errorNombreA = 0;
  errorCapitalA = 0;
  errorDescripcionA = 0;
  errorImagenA = 0;
  OkActualizacion = 1;


  constructor(private provinciasService: ProvinciasService,) {
    this.provincias = provinciasService.listarProvincias();
    console.log(this.provincias)
  }


  eliminar($event: any) {
    console.log($event.target.value);

    let id: string = $event.target.value; //Guardamos el id del boton
    for (let i = 0; i < this.provincias.length; i++) { //recorremos el array.
      if (this.provincias[i].id == id) {//buscamos coincidencia de id.
        this.provincias.splice(i, 1);//Cuando encuentra, elimina y sale del ciclo.
        break;
      }
    }
    console.log(this.provincias);//imprime en consola el objeto resultante

    this.provinciasService.guardarProvincias(this.provincias);
    this.provinciasService.guardarProvinciasLocal();
  }

  agregar() {
    this.nuevo.id = (this.provincias.length + 1).toString();//Id artificial. Debe ser de BD.
    console.log(this.nuevo);
    this.provincias.push(this.nuevo);
    console.log(this.provincias);
    this.provinciasService.guardarProvincias(this.provincias);
    this.provinciasService.guardarProvinciasLocal();

    const inputFile = document.getElementById('fileInput') as HTMLInputElement;
    if (inputFile) {
      inputFile.value = '';
    }

    this.nuevo = {};
  }

  validarCampos(): Boolean {
    console.log("Validando los campos del formulario!!!");
    this.errorNombre = this.verificarNombre(this.nuevo.nombre);
    this.errorDescripcion = this.verificarDescripcion(this.nuevo.descripcion);
    this.errorCapital = this.verificarCapital(this.nuevo.capital);
    if ((this.errorNombre + this.errorDescripcion + this.errorCapital) > 0) {
      return false;
    }
    return true;
  }

  validarCamposActualizar(): boolean {
    console.log("Validando los campos del formulario!!!");
    this.errorNombreA = this.verificarNombre(this.nuevo_auxiliar.nombre);
    this.errorDescripcionA = this.verificarDescripcion(this.nuevo_auxiliar.descripcion);
    this.errorCapitalA = this.verificarCapital(this.nuevo_auxiliar.capital);

    if ((this.errorNombreA + this.errorDescripcionA + this.errorCapitalA) > 0) {
      return false;
    }
    this.OkActualizacion = 0;
    return true;
  }

  private verificarNombre(nombre: any): number {
    const patron = /^[A-Z][A-z,a-z\s]+$/; //Primer caracter en mayusculas alternando luego
    if (nombre === undefined)
      return 1;
    if (nombre.length > 40)
      return 2;
    if (!patron.test(nombre))
      return 3;
    return 0;
  }

  private verificarCapital(capital: any): number {
    const patron = /^[A-Z][A-z,a-z\s]+$/; //Primer caracter en mayusculas alternando luego
    if (capital === undefined)
      return 1;
    if (capital.length > 40)
      return 2;
    if (!patron.test(capital))
      return 3;
    return 0;
  }

  private verificarDescripcion(descripcion: any): number {
    console.log(descripcion);
    if (descripcion === undefined)
      return 1;
    if (descripcion.length < 5)
      return 2;
    return 0;
  }

  private verificarImagen(imagen: any): number {
    if (imagen === undefined)
      return 1;
    return 0;
  }

  limpiarNombre() {
    if (this.errorNombre > 0) {
      console.log("Limpiar nombre");
      this.nuevo.nombre = "";
      this.errorNombre = 0;
    }
  }

  limpiarCapital() {
    if (this.errorCapital > 0) {
      console.log("Limpiar capital");
      this.nuevo.capital = "";
      this.errorCapital = 0;
    }
  }

  limpiarDescripcion() {
    if (this.errorDescripcion > 0) {
      console.log("Limpiar descripcion");
      this.nuevo.descripcion = "";
      this.errorDescripcion = 0;
    }

  }

  limpiarImagen() {
    if (this.errorImagen > 0) {
      console.log("Limpiar imagen");
      this.nuevo.imagen = "";
      this.errorImagen = 0;
    }
  }


  mostrarVistaPreviaNuevo(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.nuevo.imagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  actualizar() {
    console.log("Elige: " + this.id_select)
    Object.assign(this.provincias[this.indice], this.nuevo_auxiliar);

    this.nuevo_auxiliar = {};
    this.provinciasService.guardarProvincias(this.provincias);
    this.provinciasService.guardarProvinciasLocal();

    this.id_select = "0"; 
  }

  seleccionaValor($event: any) {
    console.log("Elige: " + this.id_select)
    if (this.id_select !== '0') {
      for (let i = 0; i < this.provincias.length; i++) {
        if (this.id_select == this.provincias[i].id) {
          this.indice = i;
          this.nuevo_auxiliar = Object.assign({}, this.provincias[i]);
          break;
        }
      }
      this.OkActualizacion = 1;
    } else {
      this.OkActualizacion = 0;
    }
  }


  mostrarVistaPrevia(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Almacenar temporalmente la imagen en nuevo_auxiliar.imagen
        this.nuevo_auxiliar.imagen = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
