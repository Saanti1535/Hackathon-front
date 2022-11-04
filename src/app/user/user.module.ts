import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotUserComponent } from './forgot-user/forgot-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class UserModule { }
