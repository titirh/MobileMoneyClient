import { Component, OnInit } from '@angular/core';
import { Appel } from '../classes/Appel';
import { HistoriqueService } from './historique.service';

@Component({
  selector: 'ns-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  public title = "HISTORIQUE DES APPELS";
  public historiqueE: Appel[];
  public historiqueS: Appel[];
  public errorMessage: string;

  constructor(private historiqueService: HistoriqueService) { }

  ngOnInit(): void {

    this.historiqueService.getHistoriqueEntrant().subscribe({
      next: appel => {
        this.historiqueE = appel;
        console.log(this.historiqueE);
      },
      error: err => this.errorMessage = err
    });

    this.historiqueService.getHistoriqueSortant().subscribe({
      next: appel => {
        this.historiqueS = appel;
        console.log(this.historiqueS);
      },
      error: err => this.errorMessage = err
    });
  }

}
