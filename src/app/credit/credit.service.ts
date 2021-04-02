import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class CreditService{

    
    public monId = parseInt(localStorage.getItem('currentId'));
    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';
    
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    //-----------------------------------------------

    constructor(private httpClient: HttpClient){}

    //-----------------------------------------------

    public crediterCompte(montant: number) {
        
        return this.httpClient.post<any>(this.urlWS + '/credit/'+montant, this.monId);
    }
}
