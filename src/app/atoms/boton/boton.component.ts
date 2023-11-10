import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {

  @Input() color: string = '--primary-color';
  @Input() click: any = () => { };

}
