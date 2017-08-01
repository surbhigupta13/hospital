import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SelectItem} from 'primeng/primeng';
import {NgModule}  from '@angular/core';
import {master} from './master.interface';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  master:master = {
    groupName:'',
    code:'',
    description:'',
    sortOrder:null,
    active:'',
    shortId:null,
    schedule:''
  };
  groups: SelectItem[];
  selectedCity: string;
  constructor(public router: Router) {
    this.groups = [];
        this.groups.push({label:'Select Group', value:null});
        this.groups.push({label:'Work performed', value:{id:1, name: 'New York', code: 'NY'}});
        this.groups.push({label:'WO type', value:{id:2, name: 'Rome', code: 'RM'}});
        this.groups.push({label:'WO status', value:{id:3, name: 'London', code: 'LDN'}});
        this.groups.push({label:'WO risks', value:{id:4, name: 'Istanbul', code: 'IST'}});
        this.groups.push({label:'WO priority', value:{id:5, name: 'Paris', code: 'PRS'}});
  }
    


    
  
}
