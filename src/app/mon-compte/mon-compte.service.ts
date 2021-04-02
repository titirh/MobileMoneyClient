import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MonCompte } from "../classes/MonCompte";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class MonCompteService{

    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';
    
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    constructor(private http: HttpClient){}

    public getDataMonCompte(id_user: number): Observable<MonCompte[]> {

        return this.http.get<MonCompte[]>(this.urlWS+'/compte/monCompte/'+id_user).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => MonCompte.fromJson(jsonItem))
            )
        );
    }
}
