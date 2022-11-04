import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotUserComponent } from './forgot-user/forgot-user.component';

const USER_ROUTES: Routes = [
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(USER_ROUTES)
  ]
})
export class UserRouterModule { }
