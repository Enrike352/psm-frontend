import { Component } from '@angular/core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DirectorioDocenteComponent } from '../directorio-docente/directorio-docente';


@Component({
  selector: 'app-tabla-doble-entrada',
  imports: [NzTableModule, NzModalModule, DirectorioDocenteComponent],
  templateUrl: './tabla-doble-entrada.html',
  styleUrl: './tabla-doble-entrada.scss',
})
export class TablaDobleEntradaComponent {


  isVisibleModalCrearDocente: boolean = false;
  nombreDocente: string = '';
  idDocente: number = 0;

  showModal(): void {
    this.isVisibleModalCrearDocente = true;
  }

  handleCancel(): void {
    this.isVisibleModalCrearDocente = false;
  }



  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'London No. 2 Lake Park'
    },
    {
      key: '5',
      name: 'Jake White',
      age: 18,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park'
    }
  ];
}
