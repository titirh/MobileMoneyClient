import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonCompte } from '../classes/MonCompte';
import { MonCompteService } from './mon-compte.service';

@Component({
  selector: 'ns-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  public title = 'MON COMPTE';
  public id = parseInt(localStorage.getItem('currentId'));

  modelMonCompte: MonCompte[];
  public errorMessage: string;
  private router: Router;

  //------------------------------------

  constructor(private monCompteService: MonCompteService) { }

  ngOnInit(): void {

    this.monCompteService.getDataMonCompte(this.id).subscribe({
      next: data => {
        this.modelMonCompte = data;
        console.log(this.modelMonCompte);
      },
      error: err => this.errorMessage = err
    });
  }

  //------------------------------------
}
