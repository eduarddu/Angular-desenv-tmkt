import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError,retry, Observable } from "rxjs";
import { CadastroMenu } from "../model/CadastroMenu";
import { ConsultaPagina } from "../model/ConsultaPagina";

@Injectable({
    providedIn: 'root'
})

export class CadastroMenuService {
    url = 'http://localhost:56720';
    

    constructor(private http: HttpClient){

    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    SetCadastroMenu(nome: string) {
        const body = JSON.stringify(nome);
        var headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json",
        })
        
        return this.http.post<CadastroMenu>(this.url+'/api/CadastroMenu/SetCadastroMenu?nome='+nome
        ,body
        ,{headers: headers})
    }

    

}