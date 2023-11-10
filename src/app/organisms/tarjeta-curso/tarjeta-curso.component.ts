import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-curso',
  templateUrl: './tarjeta-curso.component.html',
  styleUrls: ['./tarjeta-curso.component.css']
})
export class TarjetaCursoComponent {
  @Input() color: string = '--primary-color'; 
  @Input() isLogged: boolean = false;
  boxShadow: string = '0px 0px 10px 4px rgba(0,0,0,0.3)';

  constructor(private router: Router) { }

  onClick: any = () => { 
    this.router.navigate(['/inscripcion']);
    console.log("click");
  };

  

  ngOnInit(): void {
    /* conseguir valor varible css */
    let style = getComputedStyle(document.documentElement);
    let color = style.getPropertyValue(this.color);
    this.color = color;
    /*crear rgba de color */
    let rgba = this.color.replace('rgb', 'rgba').replace(')', ', 0.75)');
    this.boxShadow = `0px 0px 10px 0px ${rgba}`;

  }

}
