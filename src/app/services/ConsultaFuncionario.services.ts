import { Injectable } from '@angular/core'; 
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ConsultaFuncionario } from '../model/ConsultaFuncionario';

@Injectable({
    providedIn: 'root'
})

export class ConsultaFuncionarioService {
    url = 'http://localhost:56720';

    constructor(private http: HttpClient){

    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    GetConsultaFuncionario( Matricula: string, Nome: string ) {
        return this.http.get<ConsultaFuncionario[]>(this.url +
            '/api/ConsultaFuncionario/GetConsultaFuncionario?Matricula=' + Matricula + '&Nome=' + Nome).pipe(
                retry(2),
                catchError(this.handleError)
            )
    }

    handleError(error: HttpErrorResponse) 
    {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
    } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    };

}