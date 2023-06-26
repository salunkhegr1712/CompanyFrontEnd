import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name:String="ghansham";
  branch:String="CSE";
  mobile:Number=8624969401
  age:Number=21;
  beta=false

  button:string="show details"

  // now we will learn about the data binding and see how it works 
  data="this is data send from app.Component.ts"

  vis="display: none;"

  colspan=4
  
  // for class binding
  classes="italicise increasefont"
  list=["italicise","increasefont"]

  // we can use boolean object and class binding 
  passBooleanValue=false
  //  this event 
  m=0;
  func() {

    console.log("button is clikced")
    if(this.beta==false){
      this.vis="visibility:visible"
      this.beta=true
      this.button="hide details"
    }

    else{
      this.vis="display: none"
      this.beta=false
      this.button="show details"
    }
  }
  addClass(){
    let cls={
      redbackground:true,
      white :true
    }
    return cls
  }


  // two way data bindindg 
}
