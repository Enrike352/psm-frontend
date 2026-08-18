import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, ChangeDetectorRef, ContentChild, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PruebaService } from '../../service/pruebaObserver.service';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';



@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [
    JsonPipe,
    NgTemplateOutlet
  ],
  template: `
  Component Ficha 
    <div [style]="'margin-bottom: 10px; padding: 10px; background-color: '+colorFondo+';'">

    <ng-container *ngTemplateOutlet="titulo"></ng-container>
      -----------------------------------------------------------------------------------------
      <h1>
      Hola, {{ nombre }}!
      </h1>
      <p>{{ descripcion }}</p>
      @if(mostrarEdad){
      <p>Edad: {{ edad }}</p>
      }
      
      <ng-container *ngTemplateOutlet="plantillaFicha"></ng-container>

      <button (click)="saludar()">{{nombreBotonSaludar}}</button>
      <button (click)="eliminar()">Eliminar</button>

      <button (click)="ejemplo2()">Doble Enlace</button>

      <button (click)="consumirApiPrueba()">Consulta observer</button>
      
      {{ejemplo}}

      {{lsDatosVariables | json}}
      <br>
      -----------------------------------------------------------------------------------------
      <br>
      <ng-container *ngTemplateOutlet="botonesAccionFooter"></ng-container>

      
    </div>
  `,
  styles: [`
    h1 { color: blue; }
  `]
})
export class FichaComponent implements OnInit {

  @ContentChild('contenidoFicha') plantillaFicha!: TemplateRef<any>;

  @ContentChild('botonesAccionFooter') botonesAccionFooter!: TemplateRef<any>;

  @ContentChild('titulo') titulo!: TemplateRef<any>;

  lsDatosVariables: any[] = [];
  @Input() nombre!: string;
  @Input() descripcion: string | undefined;
  @Input() edad: number | undefined;
  @Input() mostrarEdad: boolean = true;
  @Input() nombreBotonSaludar: string = 'Mandar Saludo'
  @Input() colorFondo: string = "#9e9e9eff";

  @Output() onEliminar: EventEmitter<string> = new EventEmitter<string>();

  @Input() ejemplo: string = "ejemplo";
  @Output() ejemploChange: EventEmitter<string> = new EventEmitter<string>();

  saludar() {
    alert("Hola " + this.nombre);
  }

  eliminar() {
    this.onEliminar.emit(this.nombre);
  }

  ejemplo2() {
    this.ejemploChange.emit(this.nombre);
  }


  // 1. Inyectamos el servicio HTTP, tu servicio y ChangeDetectorRef
  constructor(
    private http: HttpClient,
    private pruebaService: PruebaService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.consumirApiPrueba();
    this.cdr.detectChanges();
  }



  consumirApiPrueba() {
    this.pruebaService.getAll().subscribe({
      next: (rpta: any) => {

        console.log('Datos recibidos del API Rest:', rpta);
        this.lsDatosVariables = rpta;

        // Magia: Obligamos a Angular a darse cuenta del cambio instantáneamente
        this.cdr.detectChanges();
      }
    });

    // this.http.get('http://localhost:8089/sf/backend/batch')
    //   .subscribe({
    //     next: (rpta: any) => {

    //       console.log('Datos recibidos del API Rest:', rpta);
    //       this.lsDatosVariables = rpta;
    //       this.lsDatosVariables = [...this.lsDatosVariables];
    //     }
    //   });
  }
}