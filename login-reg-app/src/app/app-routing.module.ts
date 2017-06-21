import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginRegComponent
  },
  {
  	path: 'success',
  	component: SuccessComponent
  },
  {
  	path: 'users',
  	component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
