import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'app';
  userName:string;
  userPass:string;
  error:string;
  constructor(public router: Router) {}

  login() {
      if(this.userName === 'Admin' && this.userPass ==='Admin') {
          const loginObj = {
              userName:this.userName,
              password:this.userPass
          }
        localStorage.setItem('currentUser',JSON.stringify(loginObj));
        this.router.navigate(['home']);
      }
    else {
        this.error = " Wrong username and password"
    }
  }
}
