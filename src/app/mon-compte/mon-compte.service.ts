import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { MonCompte } from "../classes/MonCompte";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
})

export class MonCompteService{

   
u: User = new User(0,"0","0","0","0");
private readonly urlWS = this.u.getUrl(); 
    
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
