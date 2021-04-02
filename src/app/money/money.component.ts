import { Component, OnInit } from '@angular/core';
import { MoneyService } from './money.service';

@Component({
  selector: 'ns-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  public title = 'MOBILE MONEY';
  public modelMontant: number;

  constructor(private moneyService: MoneyService) { }

  ngOnInit(): void {
  }

  SubmitDepot(){
    console.log("Depot submitted");
    this.moneyService.faireDepotMoney(this.modelMontant).subscribe((reponse: any) => console.log(reponse));
  }
}
