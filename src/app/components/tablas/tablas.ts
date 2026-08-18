import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropdownModule, NzPlacementType } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

// 1. Definimos la estructura de nuestros datos
export interface CpeInconcluso {
  ruc: string;
  empresa: string;
  tipoCpe: string;
  nroCpe: string;
  fechaEmision: string;
  detalleError: string;
  intentos: number;
}

@Component({
  selector: 'app-tablas',
  imports: [NzTableModule, NzDividerModule, NzDropdownModule, NzButtonModule, NzTypographyModule, NzTagModule, NzGridModule, NzFormModule, NzSelectModule, NzIconModule, ReactiveFormsModule, NzInputModule],
  templateUrl: './tablas.html',
  styleUrl: './tablas.scss',
})
export class TablasComponent {

  filtroForm: FormGroup;
  verMasFiltros = false;

  arrPlan = [
    { idPlan: 1, nombre: 'Plan Básico' },
    { idPlan: 2, nombre: 'Plan Medio' },
    { idPlan: 3, nombre: 'Plan Premium' }
  ];

  constructor(private fb: FormBuilder) {
    this.filtroForm = this.fb.group({
      ruc: [''],
      razonSocialNombre: [''],
      arrIdPlan: [[]]
    });
  }

  obtenerEmpresaPorFiltros() {
    console.log('Filtros a buscar:', this.filtroForm.value);
  }

  limpiarFiltrosBusqueda() {
    this.filtroForm.reset();
  }

  productoKeyEnterRuc() {
    this.obtenerEmpresaPorFiltros();
  }

  productoKeyEnter() {
    this.obtenerEmpresaPorFiltros();
  }

  listOfData: CpeInconcluso[] = [
    {
      ruc: '20123456789',
      empresa: 'Empresa Alpha SAC',
      tipoCpe: 'Factura',
      nroCpe: 'F001-000123',
      fechaEmision: '2023-10-01',
      detalleError: 'Timeout en SUNAT',
      intentos: 3
    },
    {
      ruc: '10987654321',
      empresa: 'Juan Perez',
      tipoCpe: 'Boleta',
      nroCpe: 'B001-000456',
      fechaEmision: '2023-10-02',
      detalleError: 'Firma Inválida',
      intentos: 1
    },
    {
      ruc: '20555555555',
      empresa: 'Constructora Beta',
      tipoCpe: 'COMUNICACION DE BAJA',
      nroCpe: 'F002-000999',
      fechaEmision: '2023-10-03',
      detalleError: 'Servicio SUNAT Caído',
      intentos: 5
    },
    {
      ruc: '20123456789',
      empresa: 'Empresa Alpha SAC',
      tipoCpe: 'Factura',
      nroCpe: 'F001-000123',
      fechaEmision: '2023-10-01',
      detalleError: 'Timeout en SUNAT',
      intentos: 3
    },
    {
      ruc: '10987654321',
      empresa: 'Juan Perez',
      tipoCpe: 'Boleta',
      nroCpe: 'B001-000456',
      fechaEmision: '2023-10-02',
      detalleError: 'Firma Inválida',
      intentos: 1
    },
    {
      ruc: '20555555555',
      empresa: 'Constructora Beta',
      tipoCpe: 'Factura',
      nroCpe: 'F002-000999',
      fechaEmision: '2023-10-03',
      detalleError: 'Servicio SUNAT Caído',
      intentos: 5
    },
    {
      ruc: '20123456789',
      empresa: 'Empresa Alpha SAC',
      tipoCpe: 'Factura',
      nroCpe: 'F001-000123',
      fechaEmision: '2023-10-01',
      detalleError: 'Timeout en SUNAT',
      intentos: 3
    },
    {
      ruc: '10987654321',
      empresa: 'Juan Perez',
      tipoCpe: 'Boleta',
      nroCpe: 'B001-000456',
      fechaEmision: '2023-10-02',
      detalleError: 'Firma Inválida',
      intentos: 1
    },
    {
      ruc: '20555555555',
      empresa: 'Constructora Beta',
      tipoCpe: 'Factura',
      nroCpe: 'F002-000999',
      fechaEmision: '2023-10-03',
      detalleError: 'Servicio SUNAT Caído',
      intentos: 5
    },
    {
      ruc: '20123456789',
      empresa: 'Empresa Alpha SAC',
      tipoCpe: 'Factura',
      nroCpe: 'F001-000123',
      fechaEmision: '2023-10-01',
      detalleError: 'Timeout en SUNAT',
      intentos: 3
    },
    {
      ruc: '10987654321',
      empresa: 'Juan Perez',
      tipoCpe: 'Boleta',
      nroCpe: 'B001-000456',
      fechaEmision: '2023-10-02',
      detalleError: 'Firma Inválida',
      intentos: 1
    },
    {
      ruc: '20555555555',
      empresa: 'Constructora Beta',
      tipoCpe: 'Factura',
      nroCpe: 'F002-000999',
      fechaEmision: '2023-10-03',
      detalleError: 'Servicio SUNAT Caído',
      intentos: 5
    }
  ];

  tipoButton: NzPlacementType = 'bottomRight';

}
