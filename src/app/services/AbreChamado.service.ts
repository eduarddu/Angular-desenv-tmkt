import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AbreChamado } from "../model/AbreChamado";

@Injectable({
    providedIn: 'root'
})

export class AbreChamadoService {
    url = 'https://localhost:44350';

    constructor(private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }


    SetAbreChamado( abreChamado: AbreChamado, ctrCodigo:number, agtCodigo: string, aplCodigo: number, atcCodigo:number, descricao: string, titulo: string)
    {
        const body = JSON.stringify(abreChamado);
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            "Accept": "application/json",
        })
        return this.http.post<AbreChamado>
        (this.url+'/AbreChamado/SetAbreChamado?ctrCodigo='+ctrCodigo+'&agtCodigo='+agtCodigo+'&aplCodigo='+aplCodigo+'&atcCodigo=5'+'&descricao='+descricao+'&titulo='+titulo
        ,body
        ,{headers:headers})
    }
}