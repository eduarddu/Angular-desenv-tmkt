import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AtualizaChamado } from "../model/SetAtualizaChamado";

@Injectable({
    providedIn: 'root'
})

export class AtualizaChamadoService {

    url = 'https://localhost:44350';

    constructor(private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    SetAtualizaChamado( atualizaChamado:AtualizaChamado,chacodigo:number,status:string,agtCodigo:string,prazo:Date)
    {
        const body = JSON.stringify(atualizaChamado);
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            "Accept": "application/json",
        })
        return this.http.post<AtualizaChamado>(this.url+'/SetAtualizaChamado/SetAtualizaChamado?chacodigo='+chacodigo+'&status='+status+'&agtcodigo='+agtCodigo+'&prazo='+prazo
        ,body
        ,{headers:headers})    } 

}