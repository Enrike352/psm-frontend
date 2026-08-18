import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
@Component({
  selector: 'app-checked',
  imports: [FormsModule, NzCheckboxModule],
  templateUrl: './checked.html',
  styleUrl: './checked.scss',
})
export class CheckedComponent {
  checked: boolean = false;

  estado() {
    console.log("Estado del check");
  }

  apagar() {
    console.log("Apagando el check");
  }


  encendedor(estadoEncendido: boolean) {
    console.log
  }

  apagando(estadoApagado: boolean) {

  }

}
