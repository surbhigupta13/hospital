import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HospitalComponent} from './hospital/hospital.component';
import {MasterComponent} from './master/master.component';
import {UserComponent} from './user/user.component';
import {DevicesComponent} from './devices/devices.component';

import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
@NgModule({
  declarations: [
   HospitalComponent,
   MasterComponent,
   UserComponent,
   DevicesComponent
    
    
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule
  ],
  exports:[
   HospitalComponent,
   MasterComponent,
   UserComponent,
   DevicesComponent
    
  ]
  
})
export class CreationModule { }
