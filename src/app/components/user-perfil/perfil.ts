import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-perfil',
  standalone: true,
  template: `
    <div style="border: 2px solid gray; padding: 10px; margin: 10px; width: 250px;">
        <h3>Perfil del Usuario</h3>
        
        <!-- Usamos las llaves dobles para mostrar tus variables @Input -->
        <p><strong>Nombre:</strong> {{ nombreUsuario }} </p>
        <p><strong>Rol:</strong> {{ rolUsuario }} </p>
        <p><strong>Estado:</strong> 
          @if(estadoUsuario) {
            <span style="color: green;">Activo</span>
          } @else {
            <span style="color: red;">Inactivo</span>
          }
        </p>
      </div>
  `,
  styles: [
    `
    
    `
  ]
})
export class perfilComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    // alert("Inicio");

  }

  ngOnDestroy(): void {
    // alert("Adios");

  }


  @Input() nombreUsuario!: string;
  @Input() rolUsuario!: string;
  @Input() estadoUsuario!: boolean;



}