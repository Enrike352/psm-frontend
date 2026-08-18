import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FichaComponent } from '../ficha/ficha';
import { perfilComponent } from '../user-perfil/perfil';

@Component({
  selector: 'app-ejemplo',
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
  templateUrl: './ejemplo.html',
  styleUrl: './ejemplo.scss',
})
export class Ejemplo {


  mensaje = "hola2";
  comida: boolean = true;
  variableDoble: string = "doble";

  usuarios: any[] = [
    {
      nombreUsuario: "Enrique",
      rolUsuario: "Administrador",
      estadoUsuario: true
    }
  ]



  integrantes: any[] = [
    // {
    //   nombre: "Enrique2",
    //   descripcion: "Joven de 23 años",
    //   edad: 20,
    //   mostrarEdad: true
    // },
    // {
    //   nombre: "Donadoni2",
    //   descripcion: "Joven de 34 años",
    //   edad: 34,
    //   mostrarEdad: false
    // },
    // {
    //   nombre: "Donadoni23",
    //   descripcion: "Joven de 34 años",
    //   edad: 34,
    //   mostrarEdad: false
    // }
  ];

  saludo() {
    this.variableDoble = "Cambiado desde Afuera";
    23 + 5
    "#231231"
    true
    //#123123
    if (this.comida == true) {
      this.comida = false;
      this.mensaje = "No hay comida";
    } else {
      this.comida = true;
      this.mensaje = "Hay comida";
    }
  }

  eliminar(name: string) {
    alert("Borrado mensaje " + name);
    let index = this.integrantes.findIndex(e => e.nombre == name);
    this.integrantes.splice(index, 1);

  }

  mostrarAlerta() {
    alert("¡El Padre escuchó al Hijo! El artículo llegó a 10 likes.");
  }
}
