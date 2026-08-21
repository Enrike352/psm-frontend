import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';



@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, JsonPipe, NzButtonModule],
  template: `
    <form [formGroup]="perfilForm" >
      <div>
        <label >Nombre: </label>
        <input type="text" formControlName="nombre">
        @if(this.perfilForm.get('nombre')?.invalid){
          <br>
            <span style ="color: red;">El nombre es incorrecto</span>
        }

      </div>
      <div>
        <label >Email: </label>
        <input formControlName="email">
      </div>
      <div>
        <label >Dirección: </label>
        <input formControlName="direccion">
      </div>
      <div>
        <label >Celular: </label>
        <input formControlName="celular">
        @if(perfilForm.get('celular')?.errors?.['required']){
          <br><span style ="color: red;">El celular es obligatorio</span>
        }@else if (perfilForm.get('celular')?.errors?.['minlength']) {
          <br><span style ="color: red;">Ingrese como mínimo 9 dígitos</span>
        }@else if (perfilForm.get('celular')?.errors?.['maxlength']) {
          <br><span style ="color: red;">Ingrese como máximo 9 dígitos</span>
        }
      </div>
      <div>
        <label >Género: </label>
        <select formControlName="genero">
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </div>

    <button nz-button
      nzType="primary"
      (click)="guardar()"
      [disabled]="!this.perfilForm.dirty"
      >
      Guardar
    </button>

    <button nz-button
      nzType="default"
      (click)="resetFormulario()"
      >
      reset()
    </button>
    <button nz-button
      nzType="default"
      (click)="setValueFormulario()"
      >
      setValue()
    </button>
    <button nz-button
      nzType="default"
      (click)="patchValueFormulario()"
      >
      patchValue()
    </button>

    <button nz-button
      nzType="default"
      (click)="enableFormulario()"
      >
      enable()
    </button>

    <button nz-button
      nzType="default"
      (click)="disabledFormulario()"
      >
      disable()
    </button>

    <button nz-button
      nzType="default"
      (click)="pristineFormulario()"
      >
      pristine()
    </button>

    </form>
    @if(!this.perfilForm.valid){
      <span style ="color: red;">Corrija los datos del formulario</span>
    }

    <br>
    <br>
    -----------------
    <br>
    this.perfilForm.value:
    {{this.perfilForm.value|json}}

    <br>
    this.perfilForm.valid:
    {{this.perfilForm.valid|json}}

    <br>
    this.perfilForm.invalid:
    {{this.perfilForm.invalid|json}}

    <br>
    this.perfilForm.touched:
    {{this.perfilForm.touched}}

    <br>
    this.perfilForm.dirty:
    {{this.perfilForm.dirty}}

    <br>
    this.perfilForm.pristine:
    {{this.perfilForm.pristine}}
    <br>
---------------------
    <br>
    this.perfilForm.get('nombre').value:
    {{this.perfilForm.get('nombre')?.value}}
    <br>
    this.perfilForm.get('nombre').valid:
    {{this.perfilForm.get('nombre')?.valid}}
    <br>
--------- errors-
<br>
    this.perfilForm.get('celular').errors:
    {{this.perfilForm.get('celular')?.errors | json}}

  `,
  styles: [`
   
  `]
})
export class FichaComponent implements OnInit {

  // perfilForm: FormGroup = new FormGroup({
  //   nombre: new FormControl(''),
  //   email: nw FormControl('usuario@ejemplo.com'),
  //   direccion: new FormControl('Ate'),
  //   genero: new FormControl('F')
  // });

  perfilForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.perfilForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(8),]],
      email: ['', /*Validators.email*/],
      direccion: ['Ate(Defecto)', /*Validators.required*/],
      genero: [''],
      celular: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
    });

  }


  guardar() {
    console.log(this.perfilForm.get('nombre'));
    // console.log("FORMS REACTIVOS", this.perfilForm.value);
    if (this.perfilForm.valid) {
      console.log(this.perfilForm.value);
      alert("SE MANDO A BD");
      //enviar a BD
    } else {
      alert("FORMULARIO INVALIDO");
      //mostrar modal de correjir el formulario
    }

  }


  ngOnInit(): void {

  }

  resetFormulario() {
    this.perfilForm.reset();
  }

  patchValueFormulario() {
    this.perfilForm.patchValue(
      {
        email: 'enrique@gmail.com',
        celular: '987654321',
      }
    );
  }

  setValueFormulario() {
    this.perfilForm.setValue(
      {
        nombre: '',
        email: 'enrique@gmail.com',
        direccion: '',
        genero: '',
        celular: '987654321',
      }
    );
  }

  enableFormulario() {
    this.perfilForm.enable();
  }

  disabledFormulario() {
    this.perfilForm.disable();
  }

  pristineFormulario() {
    this.perfilForm.markAsPristine();
  }

}