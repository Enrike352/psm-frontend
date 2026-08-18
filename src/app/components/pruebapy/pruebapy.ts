import { CurrencyPipe, DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebapy',
  imports: [UpperCasePipe, CurrencyPipe, DecimalPipe],
  templateUrl: './pruebapy.html',
  styleUrl: './pruebapy.scss',
})
export class PruebapyComponent {
  pipe1: string = "intento 1";
  pipeEntero: number = 123456789.1;
}
