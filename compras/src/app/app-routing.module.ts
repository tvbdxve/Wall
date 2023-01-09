import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { ComprasComponent } from './compras/compras.component';

const routes: Routes = [
  { path:'', component:InicioComponent},
  { path:'.', component:ContenidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
