import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';
import { BotonHeaderComponent } from './boton-header/boton-header.component';



@NgModule({
  declarations: [
    BotonComponent,
    BotonHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotonComponent,
    BotonHeaderComponent
  ]
})
export class AtomsModule { }
