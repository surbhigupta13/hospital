import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InfoComponent} from './info/info.component';
import {WorkorderComponent} from './workorder/workorder.component';
import {TabViewModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import {FieldsetModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    InfoComponent,
    WorkorderComponent
    
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    PanelModule,
    CheckboxModule,
    CalendarModule,
    FormsModule,
    InputTextareaModule,
    FieldsetModule
  ],
  exports:[
   InfoComponent,
   WorkorderComponent
    
  ]
  
})
export class DeviceInfoModule { }
