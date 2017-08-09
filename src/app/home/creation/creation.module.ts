import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HospitalComponent} from './hospital/hospital.component';
import {MasterComponent} from './master/master.component';
import {UserComponent} from './user/user.component';

import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {FormsModule,ReactiveFormsModule}    from '@angular/forms';

@NgModule({
  declarations: [
   HospitalComponent,
   MasterComponent,
   UserComponent
    
    
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    PanelModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule
  ],
  exports:[
   HospitalComponent,
   MasterComponent,
   UserComponent

    
  ]
  
})
export class CreationModule { }
