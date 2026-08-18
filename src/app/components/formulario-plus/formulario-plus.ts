import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-formulario-plus',
  imports: [FormsModule, NzDatePickerModule, NzFlexModule, NzGridModule],
  templateUrl: './formulario-plus.html',
  styleUrl: './formulario-plus.scss',
})
export class FormularioPlusComponent {
  date: Date = new Date();

  rangeDate: Date[] = [new Date(), new Date()];

  // "onChange($event)"
  // onChange(fecha: Date): void {
  //   console.log("La Fecha");
  //   console.log('onChange: ', fecha);
  // }

  fecha() {
    console.log("Valor de la Variable Fecha = " + this.date);
  }

  sumarAnio() {
    this.date.setFullYear(this.date.getFullYear() + 1);
    // this.date = new Date(this.date);

    console.log("Fecha mas 1 año: " + this.date);
  }

  fechaCalendario(textoDelInput: any) {
    this.date = textoDelInput;
    console.log("Valor de la Variable Fecha = " + this.date);
  }

  rangoFecha(textoDelInputs: any) {
    this.rangeDate = textoDelInputs;
    console.log("El valor del input es = ", textoDelInputs);
  }

  imprimirRango() {
    console.log("El valor de la variable rangoFecha es = ", this.rangeDate);
  }
}
