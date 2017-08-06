import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { costCenter } from '../dropdown/dropdown.data'
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  public dropdown = {
    costCenter: costCenter
  }
  public info = {

  }
  constructor(public router: Router) {}
  ngOnInit () {

  }
  
  
}
