import { Injectable } from '@angular/core'; 
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { CentroResultado } from '../model/CentroResultado';

@Injectable({
    providedIn: 'root'
})

export class CentroResultadoService
{
    url = 'https://localhost:44350';

    constructor(private http: HttpClient){

    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    GetCentroResultado(agtCodigo: string, tipoBusca: number, ctrCodigo: number ){
        return this.http.get<CentroResultado[]>(this.url +
         '/CentroResultado/GetCentroResultado?tipoBusca=' + tipoBusca + '&AgtCodigo=' + agtCodigo + '&ctrCodigo=' + ctrCodigo + '')
         .pipe(
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

