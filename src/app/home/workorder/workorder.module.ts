import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WorkorderComponent} from './workorder/workorder.component';
@NgModule({
  declarations: [
    WorkorderComponent
    
  ],
  imports: [
    BrowserModule
  ],
  exports:[
   WorkorderComponent
    
  ]
  
})
export class WorkorderModule { }
