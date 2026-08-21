import { HttpClient } from '@angular/common/http';
import { booleanAttribute, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { delay } from 'rxjs';
import { PlanchasPSMService } from '../../service/planchasPSM.service';
import { DebouncerSearchInputComponent } from '../widgets/debouncer-search-input/debouncer-search-input';
import { NzIconModule } from 'ng-zorro-antd/icon';

export interface Docente {
  idDocente: number;
  nombreDocente: string;
  isLoadingEliminar?: boolean;
}

@Component({
  selector: 'app-directorio-docente',
  imports: [NzTableModule
    , NzCardModule
    , NzButtonModule
    , NzModalModule
    , NzInputModule
    , FormsModule
    , NzInputNumberModule
    , NzTypographyModule
    , NzFlexModule
    , NzPopconfirmModule
    , NzGridModule
    , DebouncerSearchInputComponent
    , NzIconModule
    ,
  ],
  templateUrl: './directorio-docente.html',
  styleUrl: './directorio-docente.scss',
})
export class DirectorioDocenteComponent implements OnInit {

  @Input({ transform: (v: unknown) => v === undefined ? true : booleanAttribute(v) })
  verBotonEliminar: boolean = true;

  isVisibleModalCrearDocente: boolean = false;
  isVisibleModalActualizarDocente: boolean = false;
  nombreError: boolean = false;
  isLoadingCrear: boolean = false;
  isLoadingActualizar: boolean = false;
  lsDatosDocente: Docente[] = [];
  lsDatosDocenteCompleto: Docente[] = [];
  lsDatosDocenteEnMemoria: Docente[] = [];
  idDocente: number = 0;
  nombreDocente: string = '';
  tipoModal: string = '';
  numIdDocente: number = 1;
  filtroIdDocente: string = '';
  filtroNombreDocente: string = '';
  private readonly modalService = inject(NzModalService);

  tituloModal: string = '';
  sortById = (a: Docente, b: Docente) => a.idDocente - b.idDocente;

  private readonly message = inject(NzMessageService);
  private planchasPSMService = inject(PlanchasPSMService);
  get isFormInvalid(): boolean {
    return !this.nombreDocente || this.nombreDocente.trim().length < 8;
  }

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.imprimirDocentes();
  }
  abrirModal(modalDocente: string, idDocente?: number, nombreDocente?: string): void {
    console.log("Esta entrando al Modal y cambiando la variable tipo modalDocente: " + modalDocente);
    console.log("Esta entrando al Modal y cambiando la variable tipo Modal: " + this.tipoModal);
    console.log("Este es el valor de idDocente: " + idDocente);
    console.log("Este es el valor de nombreDocente: " + nombreDocente);
    if (modalDocente === 'registrarDocente') {
      this.generarSiguienteId();
      this.nombreDocente = '';
      this.tituloModal = 'Registrar Docente';
      this.isVisibleModalCrearDocente = true;
    }
    if (modalDocente === 'actualizarDocente' && idDocente !== undefined && nombreDocente !== undefined) {
      console.log("Logro Entrar al if para abrir el modal");
      this.idDocente = idDocente;
      this.nombreDocente = nombreDocente;
      this.tituloModal = 'Actualizar Docente';
      this.isVisibleModalActualizarDocente = true;
    }
  }

  // 
  //     showModalCrearDocente(): void {
  //       this.generarSiguienteId();
  //       this.nombreDocente = '';
  //       this.isVisibleModalCrearDocente = true;
  //     }
  // 
  //   showModalActualizarDocente(idDocente: number, nombreDocente: string): void {
  //     this.idDocente = idDocente;
  //     this.nombreDocente = nombreDocente;
  //     this.isVisibleModalActualizarDocente = true;
  //   }
  // 


  generarSiguienteId(): void {
    if (this.lsDatosDocente && this.lsDatosDocente.length > 0) {
      const maxId = Math.max(...this.lsDatosDocente.map(d => d.idDocente));
      this.idDocente = maxId + 1;
    } else {
      this.idDocente = 1;
    }
  }

  handleCancel(): void {
    this.isVisibleModalCrearDocente = false;
    this.isVisibleModalActualizarDocente = false;
  }

  validarNombre() {
    if (!this.nombreDocente || this.nombreDocente.trim().length < 8) {
      this.nombreError = true;
    } else {
      this.nombreError = false;
    }
  }

  crearDocente() {
    this.validarNombre();
    if (this.nombreError) {
      return;
    }

    this.isLoadingCrear = true;

    const nuevoDocente: Docente = {
      idDocente: this.idDocente,
      nombreDocente: this.nombreDocente
    };

    console.log('JSON Docente:', nuevoDocente);

    this.planchasPSMService.crearDocente(nuevoDocente)
      .subscribe({
        next: (rpta: any) => {
          this.imprimirDocentes();
          this.isLoadingCrear = false;
          this.isVisibleModalCrearDocente = false;
          this.mensajeRegistroExitoso();

          this.cdr.detectChanges();
        },
        error: (err: any) => {
          console.error('Error al crear docente', err);
        }
      });
  }

  imprimirDocentes() {
    this.planchasPSMService.getAllDocentes().subscribe({
      next: (rpta: any) => {
        console.log('Datos Del docente:', rpta);
        this.lsDatosDocenteCompleto = rpta;
        this.lsDatosDocente = [...rpta];
        this.cdr.detectChanges();
      }
    })
  }

  filtrar(): void {
    const filtros = {
      idDocente: this.filtroIdDocente,
      nombreDocente: this.filtroNombreDocente
    };
    if (this.filtroIdDocente == '' && this.filtroNombreDocente == '') {
      this.mensajeModalWarning();
    } else {
      this.planchasPSMService.filtrarDocentes(filtros).subscribe({
        next: (rpta: any) => {
          console.log("Esto objeto se le envia al back: " + JSON.stringify(filtros));
        this.lsDatosDocente = rpta;
          // ¡LA MAGIA OCURRE AQUÍ! Guardamos los 5 datos en el respaldo en memoria
          this.lsDatosDocenteCompleto = [...rpta];
        this.cdr.detectChanges();
        },
        error: (err: any) => {
          console.error('Error al filtrar docentes:', err);
        }
      });
    }

  }

  filtrarTablaEnMemoria(inputValorFiltro: string): void {
    console.log("Lo que llega del buscador: " + inputValorFiltro);

    const terminos = inputValorFiltro.toLowerCase().trim().split(/\s+/);

    if (inputValorFiltro == '') {

      this.lsDatosDocente = [...this.lsDatosDocenteCompleto];
    } else {
      this.lsDatosDocente = this.lsDatosDocenteCompleto.filter(e => {
        return terminos.every(termino =>
          e.nombreDocente.toLowerCase().includes(termino) ||
          e.idDocente.toString() === termino
        );
      });
    }
  }

  limpiar(): void {
    this.filtroIdDocente = '';
    this.filtroNombreDocente = '';
    this.lsDatosDocente = [...this.lsDatosDocenteCompleto];
  }

  actualizarDocente(idDocente: number, nombreDocente: string) {
    this.validarNombre();
    if (this.nombreError) {
      return;
    }

    this.isLoadingActualizar = true;

    const actualizadoDocente: Docente = {
      idDocente: this.idDocente,
      nombreDocente: this.nombreDocente
    };

    this.planchasPSMService.actualizarDocente(idDocente, actualizadoDocente).subscribe({
      next: (rpta: any) => {
        console.log("Actualizado Docente: " + rpta);
        this.imprimirDocentes();
        this.isVisibleModalActualizarDocente = false;
        this.mensajeActualizarExitoso();
        this.cdr.detectChanges();
      }
    })
  }

  eliminarDocente(docente: Docente) {
    console.log("El id del Docente es : " + docente.idDocente);

    docente.isLoadingEliminar = true;

    this.planchasPSMService.eliminarDocente(docente.idDocente)
      .pipe(delay(3000))
      // .pipe(finalize(() => {
      //   console.log("Entro al finalize()");
      //   docente.isLoadingEliminar = false;
      //   this.cdr.detectChanges();
      // }))
      //.pipe(finalize(() => this.isLoadingCrear = false))
      .subscribe({
        next: (rpta: any) => {
          console.log('Eliminando docente');
          docente.isLoadingEliminar = false;
          this.message.info('Docente eliminado');
          this.imprimirDocentes();
          this.cdr.detectChanges();
        },
        error: (err: any) => {
          alert("No se puede eliminar el docente porque esta siendo usado.")
          console.error('Error al eliminar docente', err);
          docente.isLoadingEliminar = false;
          this.cdr.detectChanges();
        }
      })
  }
  mensajeRegistroExitoso() {
    this.message.success(`Se registro exitosamente el nuevo Docente`);
  }

  mensajeActualizarExitoso() {
    this.message.info('Datos del Docente actualizado');
  }

  mensajeModalWarning(): void {
    this.modalService.warning({
      nzTitle: 'Campos de búsqueda vacíos',
      nzContent: 'Por favor, ingrese un ID o un Nombre de docente para realizar la búsqueda.'
    });
  }

}
