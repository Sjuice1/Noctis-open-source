import { Component } from '@angular/core';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  constructor(private authService : AuthService){}

  onLogin(){
    this.authService.changeToLoginMode();
  }
}
