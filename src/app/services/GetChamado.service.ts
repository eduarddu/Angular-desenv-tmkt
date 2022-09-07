import { Injectable } from '@angular/core'; 
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { GetChamado } from '../model/GetChamado';

@Injectable({
    providedIn: 'root'
})

export class GetChamadoService
{
    url = 'https://localhost:44350';

    constructor(private http: HttpClient){

    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    GetChamado(atribuido: boolean){
        return this.http.get<GetChamado[]>(this.url+
        '/GetChamado?atribuido='+atribuido).pipe(
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