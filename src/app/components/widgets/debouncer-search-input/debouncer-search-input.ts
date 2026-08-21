import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

// Importaciones de NG-ZORRO necesarias para este componente
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
@Component({
  selector: 'app-debouncer-search-input',
  templateUrl: './debouncer-search-input.html',
  styleUrls: ['./debouncer-search-input.scss'],
  standalone: true, // Cambiado a true
  imports: [
    FormsModule,
    NzGridModule,
    NzInputModule,
    NzIconModule,
    NzSpaceModule,
    NzButtonModule,
    NzTooltipModule
  ]
})
export class DebouncerSearchInputComponent implements OnInit, OnDestroy {

  private readonly destroyObservable = new Subject<void>();

  @Input() terminoBuscar: string = "";
  @Output() terminoBuscarChange = new EventEmitter<string>();
  debouncer: Subject<string> = new Subject();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() style = "width: 15em;";
  @Input() placeholder = '';

  constructor() { }

  ngOnDestroy(): void {
    this.destroyObservable.next();
    this.destroyObservable.complete();
  }

  ngOnInit(): void {
    this.debouncer
      .pipe(takeUntil(this.destroyObservable), debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscarTabla() {
    this.terminoBuscarChange.emit(this.terminoBuscar);
    this.debouncer.next(this.terminoBuscar);
  }

  limpiar() {
    this.terminoBuscar = '';
    this.buscarTabla();
  }
}