import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { ValidaAcesso } from '../model/ValidaAcesso';


@Injectable({
    providedIn: 'root'
  })
  
  export class ValidaAcessoService{
    url = 'https://localhost:44350';


    constructor(private httpClient: HttpClient) { 
    
    }

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
  
    login(matricula: string, senha: string) 
  {
    return this.httpClient.get<ValidaAcesso>(this.url + '/ValidaAcesso/SetValidaAcesso?matricula='+matricula+'&senha='+senha)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
  }

  islogged() {
    if (localStorage.getItem('currentUser') != null && localStorage.getItem('currentUser') != ''
      && localStorage.getItem('currentUser') != 'null' ) {
      return true;
    } 
    else {
      return false;
    }
  }
  

    handleError(error: HttpErrorResponse) {
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
  