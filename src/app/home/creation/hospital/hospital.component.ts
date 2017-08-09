import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent {
  public hospital={
    hospitalName:'',
    entityGroup:'',
    contactNumber:'',
    email:'',
    address:'',
    notes:''

  }
  constructor(public router: Router) {}
    
  
}
