import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, NzInputModule, NzButtonModule, NzCheckboxModule, NzSelectModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class FormularioComponent {

  nombre: string = 'Juan';
  moneda: string = 'PEN';
  monedaAntigua: number = 0;
  monedaNueva: number = 0;


  //rangeDate: Date[] = [new Date(), new Date()];

  funcionSalidaMayuscula(textoDelInput: any) {
    console.log(textoDelInput);

    this.nombre = textoDelInput.toUpperCase();

  }

  registrar() {
    console.log("REGISTRANDO");
    console.log("Valor de la variabe nombre = " + this.nombre);
    console.log("Valor de la variable moneda = " + this.moneda)
  }


  cambiarNombre() {
    this.nombre = 'Alberto';
  }

  monedaPais() {
    console.log("Nueva moneda = " + this.moneda);
  }

  conversionNuevaMoneda(inputMoneda: number) {
    console.log("cantidad de la moneda = " + inputMoneda);
    this.monedaNueva = inputMoneda;
    switch (this.moneda) {
      case "EUR":
        this.monedaNueva = this.monedaAntigua * 0.26;
        console.log("Nueva moneda = " + this.moneda);
        break;
      case "USD":
        this.monedaNueva = this.monedaAntigua * 0.30;
        console.log("Nueva moneda = " + this.moneda);
        break;
      case "VES":
        this.monedaNueva = this.monedaAntigua * 222.85;
        console.log("Nueva moneda = " + this.moneda);
        break;
      default:
        this.monedaNueva = this.monedaAntigua;
        break;
    }
  }
}
