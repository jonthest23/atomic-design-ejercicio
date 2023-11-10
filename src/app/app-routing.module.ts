import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartasComponent } from './templates/cartas/cartas.component';
import { InscripcionComponent } from './templates/inscripcion/inscripcion.component';

const routes: Routes = [
  //crear rutas a los componentes
  { path: 'cartas', component: CartasComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: '', redirectTo: '/cartas', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
