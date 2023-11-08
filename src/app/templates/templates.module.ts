import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../organisms/organisms.module';
import { CartasComponent } from './cartas/cartas.component';



@NgModule({
  declarations: [
    CartasComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule
  ]
})
export class TemplatesModule { }
