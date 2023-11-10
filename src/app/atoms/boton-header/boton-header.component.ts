import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-boton-header',
  templateUrl: './boton-header.component.html',
  styleUrls: ['./boton-header.component.css']
})
export class BotonHeaderComponent {
  @Input() click : any = () => { };

}
