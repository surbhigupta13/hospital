import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HospitalComponent} from './hospital/hospital.component';
import {MasterComponent} from './master/master.component';
import {UserComponent} from './user/user.component';

@NgModule({
  declarations: [
   HospitalComponent,
   MasterComponent,
   UserComponent
    
    
  ],
  imports: [
    BrowserModule
  ],
  exports:[
   HospitalComponent,
   MasterComponent,
   UserComponent
    
  ]
  
})
export class CreationModule { }
