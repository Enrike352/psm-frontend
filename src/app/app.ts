import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FichaComponent } from './components/ficha/ficha';
import { perfilComponent } from './components/user-perfil/perfil';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FichaComponent,
    perfilComponent,
    FormsModule,
    NzButtonModule,
    NzRateModule,
    NzIconModule
  ],
  template: `
    <h1>Appts Prueba</h1>

    <div style="display: flex; gap: 10px; margin-bottom: 20px;">
      <button nz-button nzType="primary" routerLink="/ejemplo">Ir a Ejemplo</button>
      <button nz-button nzType="primary" routerLink="/tablas">Ir a Tablas del proyecto</button>
      <button nz-button nzType="default" routerLink="/ficha">Ir a Ficha</button>
      <button nz-button nzType="dashed" (click)="irAPerfil()">Ir a Perfil</button>
      <button nz-button nzType="link" routerLink="/table">Ir a Table</button>
      <button nz-button routerLink="/pruebapy">botonPipe</button>
      <button nz-button routerLink="/tabla-doble-entrada">Tabla Doble Entrada</button>
      <button nz-button routerLink="/formulario">Fomulario</button>
      <button nz-button routerLink="/formulario-plus">Fechas</button>
      <button nz-button routerLink="/radio-color">RadioColor</button>
      <button nz-button routerLink="/checked">Checked</button>
      <button nz-button routerLink="/divisas">Divisas</button>
      <button nz-button routerLink="/directorio-docente">Directorio Docente</button>
      <button nz-button routerLink="/directorio-curso">Directorio Curso</button>
    </div>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./Ejemplo.css', './ejemplo2.css']
})
export class App {
  private router = inject(Router);

  irAPerfil() {
    this.router.navigate(['/perfil']);
  }
}
