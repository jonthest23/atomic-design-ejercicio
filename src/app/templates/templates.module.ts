import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { CartasComponent } from './cartas/cartas.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';



@NgModule({
  declarations: [
    CartasComponent,
    InscripcionComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule

  ],
  exports: [
    CartasComponent,
    InscripcionComponent
  ]
})
export class TemplatesModule { 
  @Input() isLogged: boolean = false;
}
