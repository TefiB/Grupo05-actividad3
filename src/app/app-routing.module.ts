import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListarComponent } from "./components/usuarios-listar/usuarios-listar.component";
import { VistaComponent } from "./components/vista/vista.component";
import { UsuariosPrincipalComponent } from "./components/usuarios-principal/usuarios-principal.component";
import { UsuariosHomeComponent } from "./components/usuarios-home/usuarios-home.component";
import { UsuariosIngresarComponent } from './components/usuarios-ingresar/usuarios-ingresar.component';
import { AuthGuard } from './auth.guard';

import { ProvinciasListarComponent } from './components/provincias-listar/provincias-listar.component';
import { ProvinciasAdministrarComponent } from './components/provincias-administrar/provincias-administrar.component';

const routes: Routes = [

	{
		path: '',
		redirectTo: 'usuarios/principal',
		pathMatch: 'full'
	},
	{
		path: 'usuarios/listar',
		component: UsuariosListarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'usuarios/vista',
		component: VistaComponent
	},
	{
		path: 'usuarios/principal',
		component: UsuariosPrincipalComponent
	},
	{
		path: 'usuarios/home',
		component: UsuariosHomeComponent,
		canActivate: [AuthGuard]
	},
	{
		path:'usuarios/ingresar',
		component: UsuariosIngresarComponent
	},
	{
		path: 'provincias/listar',
		component: ProvinciasListarComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'provincias/administrar',
		component: ProvinciasAdministrarComponent,
		canActivate: [AuthGuard]
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
