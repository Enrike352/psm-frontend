import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { DirectorioDocenteComponent } from "../directorio-docente/directorio-docente";
@Component({
  selector: 'app-divisas',
  imports: [FormsModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzFlexModule,
    NzGridModule,
    NzInputNumberModule,
    NzPopconfirmModule,

  ],
  templateUrl: './divisas.html',
  styleUrl: './divisas.scss',
})
export class DivisasComponent {
  private readonly message = inject(NzMessageService);


  monedaEUS: number = 0;
  moneda: string = "PEN";
  monedaNEW: number = 0;

  conversionNuevaMoneda() {

    console.log("El valor de la moneda es: " + this.moneda);
    console.log("La cantidad de plata USD ingresada es = " + this.monedaEUS);
    switch (this.moneda) {
      case ("PEN"):
        this.monedaNEW = this.monedaEUS * 3.38;
        console.log("El valor de la moneda convertida " + this.moneda + " es: " + this.monedaNEW);
        // alert("El valor de la moneda " + this.monedaEUS + "USD se convertio en: " + this.monedaNEW + " " + this.moneda);
        break;
      case ("EUR"):
        this.monedaNEW = this.monedaEUS * 0.87;
        console.log("El valor de la moneda convertida " + this.moneda + " es: " + this.monedaNEW);
        // alert("El valor de la moneda " + this.monedaEUS + "USD se convertio en: " + this.monedaNEW + " " + this.moneda);
        break;
      case ("MXN"):
        this.monedaNEW = this.monedaEUS * 17.12;
        console.log("El valor de la moneda convertida " + this.moneda + " es: " + this.monedaNEW);
        // alert("El valor de la moneda " + this.monedaEUS + "USD se convertio en: " + this.monedaNEW + " " + this.moneda);
        break;
    }
  }

  alerta() {
    this.message.success(`El valor de la moneda ${this.monedaEUS} USD se convirtió en: ${this.monedaNEW} ${this.moneda}`);
  }

  imprimirNuevoValor(nuevoValor: string) {
    console.log("============================");
    console.log("El nuevo valor es: " + nuevoValor);
    console.log("============================");
  }

  eliminarConversion() {
    this.monedaEUS = 0;
    this.moneda = 'PEN';
    this.monedaNEW = 0;
    this.message.info('Conversión eliminada');
  }


  // (ngModelChange)="monedaPais()"
}
