import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCursoComponent } from './tarjeta-curso/tarjeta-curso.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    TarjetaCursoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    TarjetaCursoComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class OrganismsModule { }
