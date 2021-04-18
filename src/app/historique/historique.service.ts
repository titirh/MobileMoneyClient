import { Injectable,ErrorHandler } from "@angular/core";
import { Offre } from "../classes/offre";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Appel } from "../classes/Appel";
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
})

export class HistoriqueService{

    
    private currentNum = localStorage.getItem('currentNumero');
u: User = new User(0,"0","0","0","0");
private readonly urlWS = this.u.getUrl();
    
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    constructor(private http: HttpClient){}

    public getHistoriqueEntrant(): Observable<Appel[]> {

        return this.http.get<Appel[]>(this.urlWS+'/appel/HistoriqueEntrant/'+this.currentNum).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Appel.fromJson(jsonItem))
            )
        );
    }

    public getHistoriqueSortant(): Observable<Appel[]> {
        
        return this.http.get<Appel[]>(this.urlWS+'/appel/HistoriqueSortant/'+this.currentNum).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Appel.fromJson(jsonItem)) 
            )
        );
    }
}
