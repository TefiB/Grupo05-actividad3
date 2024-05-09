import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Provincia } from '../models/provinciaModel';


@Injectable({
    providedIn: 'root'
})
export class ProvinciasService {
    API_URI = 'http://localhost:3000/provincia';
    provincias: Provincia[];
    constructor(/*private http: HttpClient*/) {

        this.provincias = [{
            "id": "1",
            "nombre": "Ciudad Autonoma de Buenos Aires",
            "capital": "",
            "descripcion": "probando",
            "imagen": "./assets/media/CABA.png"
        },
        {
            "id": "2",
            "nombre": "Buenos Aires",
            "capital": "La Plata",
            "descripcion": "probando",
            "imagen": "./assets/media/Provincia.png"
        },
        {
            "id": "3",
            "nombre": "Catamarca",
            "capital": "San Fernando del Valle de Catamarca",
            "descripcion": "probando",
            "imagen": "./assets/media/Catamarca.png"
        },
        {
            "id": "4",
            "nombre": "Chaco",
            "capital": "Resistencia",
            "descripcion": "probando",
            "imagen": "./assets/media/Chaco.png"
        },
        {
            "id": "5",
            "nombre": "Chubut",
            "capital": "Rawson",
            "descripcion": "probando",
            "imagen": "./assets/media/Chubut.png"
        },
        {
            "id": "6",
            "nombre": "Cordoba",
            "capital": "Cordoba",
            "descripcion": "probando",
            "imagen": "./assets/media/Cordoba.png"
        },
        {
            "id": "7",
            "nombre": "Corrientes",
            "capital": "Corrientes",
            "descripcion": "probando",
            "imagen": "./assets/media/Corrientes.png"
        },
        {
            "id": "8",
            "nombre": "Entre Rios",
            "capital": "Parana",
            "descripcion": "probando",
            "imagen": "./assets/media/EntreRios.png"
        },
        {
            "id": "9",
            "nombre": "Formosa",
            "capital": "Formosa",
            "descripcion": "probando",
            "imagen": "./assets/media/Formosa.png"
        },
        {
            "id": "10",
            "nombre": "Jujuy",
            "capital": "San Salvador de Jujuy",
            "descripcion": "probando",
            "imagen": "./assets/media/Jujuy.png"
        },
        {
            "id": "11",
            "nombre": "La Pampa",
            "capital": "Santa Rosa",
            "descripcion": "probando",
            "imagen": "./assets/media/LaPampa.png"
        }];
    }
    listarProvincias() {
        return this.provincias;
    }

    buscarProvincia(id: string) {
    
    }
    guardarProvincias(provinciasGuardar: Provincia[]) {
        this.provincias = provinciasGuardar;
    }
    guardarProvinciasLocal() {
        localStorage.setItem("Provincias", JSON.stringify(this.provincias));
    }

    cargarProvinciasLocal() {
        this.provincias = JSON.parse(localStorage.getItem("Provincias") || '{}');
    }

}
