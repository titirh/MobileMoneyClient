import { Component, OnInit } from '@angular/core';
import { Offre } from '../classes/offre';
import { OffreClientService } from './offre-client.service';

@Component({
  selector: 'ns-offre-client',
  templateUrl: './offre-client.component.html',
  styleUrls: ['./offre-client.component.css'],
})
export class OffreClientComponent implements OnInit {

  title = "LISTE DES OFFRES";

  public listOffres: Offre[];
  public rechercheOffre: Offre[];
  public errorMessage: string;

  modelDelete: any = {
    id: ''
  };

  //------------------------------------
  
  constructor(private offreClientService : OffreClientService){}

  ngOnInit(): void {
    
    this.offreClientService.getOffresWS().subscribe({
      next: offre => {
        this.listOffres = offre;
        console.log(this.listOffres);
      },
      error: err => this.errorMessage = err
    });
    
  }
  
  //------------------------------------
}

