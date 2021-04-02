import { Component, OnInit } from '@angular/core';
import { Appel } from '../classes/Appel';
import { AppelService } from './appel.service';

@Component({
  selector: 'ns-appel',
  templateUrl: './appel.component.html',
  styleUrls: ['./appel.component.css']
})
export class AppelComponent implements OnInit {

  public title = 'SIMULATION APPEL';
  
  public modelAppel: Appel = new Appel(0,null,null,null,null);
  
  public num1 = localStorage.getItem('currentNumero');
  public num2: string;
  public duree: number;


  //-------------------------------------------------------

  constructor(private appelService: AppelService) { }

  ngOnInit(): void {
  }

  //-------------------------------------------------------

  SubmitAppel(){
    
    this.modelAppel.setNumeroEntrant(this.num1);
    this.modelAppel.setNumeroSortant(this.num2);
    this.modelAppel.setDureeAppel(this.duree);

    console.log("Simulation appel");
    this.appelService.simulerAppel(this.modelAppel).subscribe((reponse: any) => console.log(reponse));
  }
}
