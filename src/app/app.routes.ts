// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HospitalComponent } from './home/creation/hospital/hospital.component';
import { MasterComponent } from './home/creation/master/master.component';
import { UserComponent } from './home/creation/user/user.component';
import { InfoComponent } from './home/deviceInfo/info/info.component';
import { WorkorderComponent } from './home/deviceInfo/workorder/workorder.component';
import { PurchaseorderComponent } from './home/deviceInfo/purchaseorder/purchase.component';
import { DefaultComponent } from './home/default';
import { AuthGuard } from './auth/auth.guard';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home/default',
    pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent
      
  },
  {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'hospital', component: HospitalComponent },
        { path: 'master', component: MasterComponent },
        { path: 'user', component: UserComponent },
        { path: 'info', component: InfoComponent},
        { path: 'workorder', component: WorkorderComponent},
        { path: 'purchaseorder', component: PurchaseorderComponent},
        { path: '', component: DefaultComponent}
    ]
  }
    // Add dog routes form a different file
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
