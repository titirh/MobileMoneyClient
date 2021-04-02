import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Appel } from "../classes/Appel";

@Injectable({
    providedIn: 'root'
})

export class AppelService{

    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';
    
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    //-----------------------------------------------

    constructor(private httpClient: HttpClient){}

    //-----------------------------------------------

    public simulerAppel(appel: Appel) {
        
        return this.httpClient.post<any>(this.urlWS + '/appel', appel);
    }
}
