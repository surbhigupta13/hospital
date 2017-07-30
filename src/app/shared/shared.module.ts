import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {HeaderComponent} from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import {AccordionModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    HeaderComponent,
    SidemenuComponent
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AccordionModule
  ],
  exports:[
    HeaderComponent,
    SidemenuComponent
    
  ]
  
})
export class SharedModule { }
