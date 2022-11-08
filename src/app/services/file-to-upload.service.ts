import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileToUpload } from '../model/file-to-upload';


export class FileToUploadService
{
    url = 'http://localhost:56720';

    constructor(private http: HttpClient){

    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    }

    uploadFile(theFile: FileToUpload) : Observable<any> {
        return this.http.post<FileToUpload>(this.url, theFile, this.httpOptions);
    }
    
}

