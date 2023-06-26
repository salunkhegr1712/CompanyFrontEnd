import { Component } from '@angular/core';

@Component({
  selector: 'app-ghansham',
  templateUrl: './ghansham.component.html',
  styleUrls: ['./ghansham.component.css']
})
export class GhanshamComponent {

  // now we will do two way data binding 
   
    username="ghansham"
    function2(event:any){
      console.log(event.target.value)
      this.username=event.target.value
    }

    //name 
    name="grs"
}
