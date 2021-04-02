import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Appel } from "../classes/Appel";

@Injectable({
    providedIn: 'root'
})

export class MoneyService{

    private currentId = parseInt(localStorage.getItem('currentId'));
    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';
    
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    //-----------------------------------------------

    constructor(private httpClient: HttpClient){}

    //-----------------------------------------------

    public faireDepotMoney(montant: number) {
        
        return this.httpClient.post<any>(this.urlWS + '/money/depot/' +montant,this.currentId);
    }
}
