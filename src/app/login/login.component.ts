import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newcomponent = "Entered in new component created"; 
  todaydate: any;
  constructor(private myservice: MyserviceService) { }
  
  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate();
  }

}
