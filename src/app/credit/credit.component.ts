import { Component, OnInit } from '@angular/core';
import { CreditService } from './credit.service';

@Component({
  selector: 'ns-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  public title = 'CREDITS';
  public modelCredit: number;

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
  }

  SubmitCredit(){
    console.log("Credit submitted");
    this.creditService.crediterCompte(this.modelCredit).subscribe((reponse: any) => console.log(reponse));
    
    setTimeout(() => {
      window.location.reload();
    },100); 
  }

}
