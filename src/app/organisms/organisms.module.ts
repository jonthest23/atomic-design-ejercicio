import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCursoComponent } from './tarjeta-curso/tarjeta-curso.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AtomsModule } from '../atoms/atoms.module';
import { FormularioCursoComponent } from './formulario-curso/formulario-curso.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { Input1Component } from '../molecules/input1/input1.component';



@NgModule({
  declarations: [
    TarjetaCursoComponent,
    HeaderComponent,
    FooterComponent,
    FormularioCursoComponent
  
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule

  ],
  exports: [
    TarjetaCursoComponent,
    HeaderComponent,
    FooterComponent,
    FormularioCursoComponent
  ]
})
export class OrganismsModule { }
