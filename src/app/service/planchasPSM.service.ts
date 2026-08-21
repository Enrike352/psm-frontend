import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PlanchasPSMService {

    private readonly backendUrl: string = environment.urlBasePSM;

    constructor(private http: HttpClient) { }

    crearDocente(docente: any): Observable<any> {
        return this.http.post<any>(`${this.backendUrl}/docente/`, docente);
    }

    getAllDocentes(): Observable<any> {
        return this.http.get<any[]>(`${this.backendUrl}/docente`);
    }

    filtrarDocentes(filtros: any): Observable<any> {
        return this.http.post<any[]>(`${this.backendUrl}/docente/filtrar`, filtros);
    }

    eliminarDocente(idDocente: number): Observable<any> {
        return this.http.delete<any>(`${this.backendUrl}/docente/${idDocente}`);
    }

    actualizarDocente(idDocente: number, docente: any): Observable<any> {
        return this.http.put<any>(`${this.backendUrl}/docente/${idDocente}`, docente);
    }
}