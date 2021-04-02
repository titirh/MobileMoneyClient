import { Injectable,ErrorHandler } from "@angular/core";
import { Offre } from "../classes/offre";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Appel } from "../classes/Appel";

@Injectable({
    providedIn: 'root'
})

export class HistoriqueService{

    
    private currentNum = localStorage.getItem('currentNumero');
    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';
    
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