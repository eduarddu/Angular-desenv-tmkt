import { Injectable } from '@angular/core'; 
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { ConsultaApp } from '../model/ConsultaApp';

@Injectable({
    providedIn: 'root',
})

export class ConsultaAppService
{
    url = 'https://localhost:44350';

    constructor(private http: HttpClient){

    }

    httpOptioons = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

   GetConsultaApp(){
    return this.http.get<ConsultaApp[]>(this.url +
        '/ConsultaApp/GetConsultaApp?')
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


