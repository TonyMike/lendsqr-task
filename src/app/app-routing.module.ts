import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserDashComponent } from './components/user-dash/user-dash.component';
// import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path:'',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'viewuser',
    component: UserDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
