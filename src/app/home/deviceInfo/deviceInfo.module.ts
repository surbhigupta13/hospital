import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InfoComponent} from './info/info.component';
@NgModule({
  declarations: [
    InfoComponent
    
  ],
  imports: [
    BrowserModule
  ],
  exports:[
   InfoComponent
    
  ]
  
})
export class DeviceInfoModule { }
