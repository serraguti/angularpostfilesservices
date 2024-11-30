import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FileModel } from "../models/filemodel";

@Injectable()
export class ServicePostFiles {

    //PARA LAS PETICIONES API VIENE UN OBJETO LLAMADO 
    //HttpClient QUE NOS PERMITIRA REALIZAR LAS PETICIONES
    constructor(private _http: HttpClient) {}

    //VOY A RECIBIR DIRECTAMENTE EL OBJETO EN EL METODO DE INSERTAR
    postFile(fileModel: FileModel): Observable<any>{
        //ESTO ES COMO JQUERY CONVERTIR UN OBJETO A JSON
        let json = JSON.stringify(fileModel);
        //DEBEMOS INDICAR EN LA PETICION QUE TIPO DE FORMATO TIENE EL OBJETO A ENVIAR
        let header = new HttpHeaders();
        header = header.set("Content-type", "application/json");
        let request = "api/testingfiles";
        let url = "https://apipostfiles.azurewebsites.net/" + request;
        return this._http.post(url, json, {headers: header});
    }
}