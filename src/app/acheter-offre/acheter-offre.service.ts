import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offre } from "../classes/offre";

@Injectable({
    providedIn: 'root'
})

export class AcheterOffreService{
   
    private currentId = parseInt(localStorage.getItem('currentId'));
    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';

    //--------------------------------

    constructor(private http: HttpClient){}

    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };
    
    //--------------------------------

    public acheterOffreWS(id_offre: number): Observable<Offre> {

        var type_payement = 'money';
        return this.http.post<Offre>(this.urlWS + '/acheterOffre/'+type_payement+'/'+id_offre,this.currentId,this.optionRequete);
    }
}