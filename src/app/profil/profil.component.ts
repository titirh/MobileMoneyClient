import { Component, OnInit } from '@angular/core';
import { MonCompte } from '../classes/MonCompte';
import { MonCompteService } from '../mon-compte/mon-compte.service';

@Component({
  selector: 'ns-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public modelMonCompte: MonCompte[] = [
    new MonCompte(null, null, null, null, null, null)
  ];
  public monNumero = localStorage.getItem('currentNumero');
  public monId = parseInt(localStorage.getItem('currentId'));
  errorMessage: any;

  constructor(private monCompteService: MonCompteService) { }

  ngOnInit(): void {
    this.monCompteService.getDataMonCompte(this.monId).subscribe({
      next: data => {
        this.modelMonCompte = data;
        console.log(this.modelMonCompte);
      },
      error: err => this.errorMessage = err
    });
  }

}
