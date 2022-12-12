import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { get } from "jquery";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class DownloadService {
    url = 'https://localhost:44350';

    constructor(private http: HttpClient){}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    download(chaCodigo:any){
        return this.http.get(this.url+'/AbreChamado/download?chaCodigo='+chaCodigo)
    }
    

}