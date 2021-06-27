import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  
  name = "Shangeeran";
  getDetails(){
    return this.name
  }
  getName(){
    alert("Hi Shangeeran")
  }

  myEvent(evt: any){
    console.warn(evt)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
