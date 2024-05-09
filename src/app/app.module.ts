import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { UsuariosRegistrarComponent } from './components/usuarios-registrar/usuarios-registrar.component';
import { UsuariosListarComponent } from './components/usuarios-listar/usuarios-listar.component';
import { VistaComponent } from './components/vista/vista.component';
import {UsuariosService} from "./services/usuarios.service";
import { ProvinciasService } from './services/provincias.service';
import {FormsModule} from '@angular/forms';
import { UsuariosPrincipalComponent } from './components/usuarios-principal/usuarios-principal.component';
import { UsuariosHomeComponent } from './components/usuarios-home/usuarios-home.component'
import {AuthGuard} from './auth.guard';
import { ProvinciasListarComponent } from './components/provincias-listar/provincias-listar.component';
import { ProvinciasAdministrarComponent } from './components/provincias-administrar/provincias-administrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosIngresarComponent,
    UsuariosRegistrarComponent,
    UsuariosListarComponent,
    VistaComponent,
    UsuariosPrincipalComponent,
    UsuariosHomeComponent,
    ProvinciasListarComponent,
    ProvinciasAdministrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [UsuariosService,AuthGuard,ProvinciasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
