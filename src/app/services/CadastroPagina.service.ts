import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CadastroMenu } from "../model/CadastroMenu";
import { CadastroPagina } from "../model/CadastroPagina";

@Injectable({
    providedIn: 'root'
})

export class CadastroPaginaService {
    url = 'http://localhost:56720';

    constructor(private http: HttpClient){

    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }


    SetCadastroPagina(Nome: string, Endereco: string, Menu: string){
        const body = JSON.stringify(Nome);
        var headers = new HttpHeaders({
            "Content-Type": "application/json",
            "Accept": "application/json",
        })
        return this.http.post<CadastroPagina>(this.url+'/api/CadastroPagina/SetCadastroPagina?NOME='+Nome+'&ENDERECO='+Endereco+'&MENU='+Menu
        ,body
        ,{headers:headers})
        
    }
}