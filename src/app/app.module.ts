import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth.guard';
import {SharedModule} from './shared/shared.module';
import {CreationModule} from './home/creation/creation.module';
import {DeviceInfoModule} from './home/deviceInfo/deviceInfo.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    SharedModule,
    CreationModule,
    DeviceInfoModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
