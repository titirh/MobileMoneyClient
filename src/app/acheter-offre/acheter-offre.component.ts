import { Component, OnInit } from '@angular/core';
import { Offre } from '../classes/offre';
import { AcheterOffreService } from './acheter-offre.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OffreClientService } from '../offre-client/offre-client.service';

@Component({
  selector: 'ns-acheter-offre',
  templateUrl: './acheter-offre.component.html',
  styleUrls: ['./acheter-offre.component.css']
})
export class AcheterOffreComponent implements OnInit {

  //---------------------------

  title = "Acheter L'OFFRE";

  public modelToBuy: Offre[]  = [
    new Offre(0, 'null', 'null', 0, 0, 'null')
  ];
  
  public modelUpdated: Offre =  new Offre(null, '', '', null, null, '');
  public errorMessage: string;

  //---------------------------

  constructor(
          private acheterOffreService : AcheterOffreService,
          private _Activatedroute: ActivatedRoute, 
          private offreClientService: OffreClientService
  ){}

  ngOnInit(): void {

    this.modelToBuy[0].id_offre =+ this._Activatedroute.snapshot.paramMap.get("idToBuy");
    this.offreClientService.getOffresByIdWS(this.modelToBuy[0].id_offre).subscribe({
      next: offre => {
        this.modelToBuy = offre;
        console.log(this.modelToBuy);
      },
      error: err => this.errorMessage = err
    });

  }

  //---------------------------

  confirmerAchatOffre(id: number){
    
    console.log("Achat Offre id="+id);
    this.acheterOffreService.acheterOffreWS(id).subscribe((reponse: Offre) => console.log(reponse));
    
    setTimeout(() => {
      window.location.reload();
    },100); 
  }

  annulerAchat(){
  }
}
