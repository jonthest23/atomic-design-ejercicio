import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.css']
})
export class TarjetaCursoComponent {
  @Input() color: string = '--primary-color'; 

}
