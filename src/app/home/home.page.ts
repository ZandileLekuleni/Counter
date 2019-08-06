import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Team_A=0;
  Team_B=0;

  constructor() {
  }
  //teama
  onMinusFourA(){
    this.Team_A+=4;

    if(this.Team_A<0)
    {
      this.Team_A=0;
    }
  }
  onAddFourA(){
    this.Team_A-=4;
  }
  onMinusThreeA(){
    this.Team_A+=3;

    if(this.Team_A<0)
    {
      this.Team_A=0;
    }
  }
  onAddThreeA(){
    this.Team_A-=3;
  }
  onMinusTwoA(){
    this.Team_A+=2;

    if(this.Team_A<0)
    {
      this.Team_A=0;
    }
  }
  onAddTwoA(){
    this.Team_A-=2;
  }
  onMinusOneA(){
    this.Team_A+=1;

    if(this.Team_A<0)
    {
      this.Team_A=0;
    }
  }
  onAddOneA(){
    this.Team_A-=1;
  }

  //teamb
  onMinusFourB(){
    this.Team_B+=4;
    if(this.Team_A<0)
    {
      this.Team_A=0;
    }
  }

  onAddFourB(){
    this.Team_B-=4;
  }
  onMinusThreeB(){
    this.Team_B+=3;
    if(this.Team_A<0)
    {
      this.Team_A=0;
    }
  }
  onAddThreeB(){
    this.Team_B-=3;
  }
  onMinusTwoB(){
    this.Team_B+=2;
    if(this.Team_A<0)
    {
      this.Team_A=0;
    }
  }
  onAddTwoB(){
    this.Team_B-=2;
  }
  onMinusOneB(){
    this.Team_B+=1;
    if(this.Team_A<0)
    {
      this.Team_A=0;
    }
  }
  onAddOneB(){
    this.Team_B-=1;
  
  }

  reset()
  {
    this.Team_A=0;
    this.Team_B=0;
  }

}
