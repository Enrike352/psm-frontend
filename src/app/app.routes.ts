import { Routes } from '@angular/router';
import { Ejemplo } from './components/ejemplo/ejemplo';
import { FichaComponent } from './components/ficha/ficha';
import { perfilComponent } from './components/user-perfil/perfil';
import { TableComponent } from './components/table/table';
import { TablasComponent } from './components/tablas/tablas';
import { PruebapyComponent } from './components/pruebapy/pruebapy';
import { TablaDobleEntradaComponent } from './components/tabla-doble-entrada/tabla-doble-entrada';
import { FormularioComponent } from './components/formulario/formulario';
import { FormularioPlusComponent } from './components/formulario-plus/formulario-plus';
import { RadioColorComponent } from './components/radio-color/radio-color';
import { CheckedComponent } from './components/checked/checked';
import { DivisasComponent } from './components/divisas/divisas';
import { DirectorioDocenteComponent } from './components/directorio-docente/directorio-docente';
import { DirectorioCursoComponent } from './components/directorio-curso/directorio-curso';


export const routes: Routes = [
  { path: '', redirectTo: 'ejemplo', pathMatch: 'full' },
  { path: 'ejemplo', component: Ejemplo },
  { path: 'ficha', component: FichaComponent },
  { path: 'perfil', component: perfilComponent },
  { path: 'table', component: TableComponent },
  { path: 'tablas', component: TablasComponent },
  { path: 'pruebapy', component: PruebapyComponent },
  { path: 'tabla-doble-entrada', component: TablaDobleEntradaComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'formulario-plus', component: FormularioPlusComponent },
  { path: 'radio-color', component: RadioColorComponent },
  { path: 'checked', component: CheckedComponent },
  { path: 'divisas', component: DivisasComponent },
  { path: 'directorio-docente', component: DirectorioDocenteComponent },
  { path: 'directorio-curso', component: DirectorioCursoComponent },
  // { path: '**', redirectTo: 'ejemplo' }
];
