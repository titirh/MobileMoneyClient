import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
})

export class CreditService{

    
    public monId = parseInt(localStorage.getItem('currentId'));
 u: User = new User(0,"0","0","0","0");
private readonly urlWS = this.u.getUrl();
    
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
