import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/primeng';
import {NgModule}  from '@angular/core';
import {master} from './master.interface';
import {groupName, active} from './master.interface';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit{
  public dropdown = {
    groupName: groupName,
  }
  master:master = {
    groupName:'',
    code:'',
    description:'',
    sortOrder:null,
    active:active,
    shortId:null,
    schedule:''
  };
  
  constructor(public router: Router) {}
  ngOnInit() {
        

  }
  
  
}
