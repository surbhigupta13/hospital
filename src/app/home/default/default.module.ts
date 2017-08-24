import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DefaultComponent } from './'
import {ChartModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  exports:[
    DefaultComponent,
    ChartModule
  ]
  
})
export class DefaultModule { }
