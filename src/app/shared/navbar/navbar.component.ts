import { Component } from '@angular/core';

@Component({
  selector: 'b-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showSearchBox = false;

  constructor() { }

  showSearch(){
    this.showSearchBox = true;
    console.log("icon clicked" + this.showSearchBox);
  }


}
