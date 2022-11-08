import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EncerraChamado } from "../model/EncerraChamado";


@Injectable({
    providedIn: 'root'
})

export class EncerraChamadoService {

    url = 'https://localhost:44350';

    constructor(private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    SetEncerraChamado(encerraCha: EncerraChamado, chacodigo: number,status:string)
    {
        const body = JSON.stringify(encerraCha);
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            "Accept": "application/json",
        })
        return this.http.post<EncerraChamado>(this.url+'/EncerraChamado/SetEncerraChamado?chacodigo='+chacodigo+'&status='+status,
        body
        ,{headers:headers})
    }

}