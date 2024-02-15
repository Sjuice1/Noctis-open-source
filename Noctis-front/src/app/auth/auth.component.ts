import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth-service';

declare const google: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  isLogin : boolean = true;
  loginForm! : FormGroup;
  registerForm! : FormGroup;


  constructor(private authService : AuthService,private googleAuthService : SocialAuthService){}

  ngOnInit(): void {
    this.authService.isLoginMode.subscribe(mode => {
      this.isLogin = mode;
      this.loginForm.reset();
      this.registerForm.reset();
    })

    this.loginForm = new FormGroup(
      {
        'login': new FormControl('',[Validators.minLength(5),Validators.required]),
        'password': new FormControl('',[Validators.minLength(6),Validators.required])
      }
    );
    this.registerForm = new FormGroup(
      {
        'login': new FormControl('',[Validators.minLength(5),Validators.required]),
        'email': new FormControl('',[Validators.email,Validators.required]),
        'password': new FormControl('',[Validators.minLength(6),Validators.required]),
        'repeatPassword': new FormControl('',[Validators.minLength(6),Validators.required])
      }
    )
    this.googleAuthService.authState.subscribe((user) => {
      console.log(user);
    })
  }

  changeMode(){
    this.isLogin = !this.isLogin
  }

  loginSubmit(){
    console.log(this.loginForm);
  }

  registerSubmit(){
    const login = this.registerForm.get('login')?.value;
    const password = this.registerForm.get('password')?.value;
    const repeatPassword = this.registerForm.get('repeatPassword')?.value;
    const email = this.registerForm.get('email')?.value;
    if(password !== repeatPassword){
      this.registerForm.setErrors({repeatedPasswordNotMatch : 'Password not match!'})
      console.log(this.registerForm);
    }
  
  }

  onArrowClick(){
    this.isLogin = true;
    this.registerForm.reset()
    this.loginForm.reset()

  }

}

