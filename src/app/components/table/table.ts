import { Component, signal } from '@angular/core';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzDropdownModule, NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-table',
  imports: [NzButtonModule, NzIconModule, NzRadioModule, FormsModule, NzDropdownModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class TableComponent {

  // Ejemplo 1
  readonly size = signal<NzButtonSize>('large');

  // Ejemplo 2
  tamanoNormal: NzButtonSize = 'large';

  readonly listOfPosition: NzPlacementType[] = [
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
    'topLeft',
    'topCenter',
    'topRight'
  ];

}
