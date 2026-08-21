import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
    providedIn: 'root'
})
export class DirectorioCursoService {

    private readonly backendUrl: string = environment.urlBasePSM;

    constructor(private http: HttpClient) { }

    getAllCursos(): Observable<any> {
        return this.http.get<any[]>(`${this.backendUrl}/curso`);
    }
}