import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DirectorioCursoService } from '../../service/directorio-curso.service';
import { JsonPipe } from '@angular/common';

export interface Curso {
  idCurso: number;
  nombreCurso: string;
}

@Component({
  selector: 'app-directorio-curso',
  imports: [NzTableModule,
    JsonPipe,

  ],
  templateUrl: './directorio-curso.html',
  styleUrl: './directorio-curso.scss',
})
export class DirectorioCursoComponent {

  idCurso?: number;
  nombreCurso?: string;
  lsDatosCursos: Curso[] = [];

  constructor(
    private http: HttpClient,
    private directorioCursoService: DirectorioCursoService,
    private cdr: ChangeDetectorRef
  ) { }

  listarCursos(): void {
    this.directorioCursoService.getAllCursos().subscribe({
      next: (rpta: any) => {
        console.log("Datos de la lista de Cusos: " + rpta)
        this.lsDatosCursos = rpta;
        this.cdr.detectChanges();
      }
    })
  }

}
