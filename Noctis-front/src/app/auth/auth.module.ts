import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutinModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleSigninButtonModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
   AuthComponent
  ],
  imports: [   
    RouterModule,
    AuthRoutinModule,
    ReactiveFormsModule,    
    GoogleSigninButtonModule,
    CommonModule
  ]
 
})
export class AuthModule { }
