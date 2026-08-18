import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  private readonly backendUrl: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/batch`);
  }

  // buscarPorId(idTutorial: number): Observable<Tutorial> {
  //   return this.http.get<Tutorial>(`${this.backendUrl}/tutoriales/${idTutorial}`);
  // }

  // buscarTutorialPorCodigoMenu(codigoMenu: string): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${this.backendUrl}/tutoriales/menu/${codigoMenu}`);
  // }
}