import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaLenguajes: string[] = ['Java', 'PHP', 'C#', 'JavaScript', 'TypeScript'];
  habilitar: boolean = true;

  constructor() { }

  setHabilitar() {
    this.habilitar = (this.habilitar === true) ? false : true;
  }


}
