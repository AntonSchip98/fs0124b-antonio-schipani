import { Component } from '@angular/core';
import { ILogData } from '../../Interface/i-log-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginData: ILogData = {
    email: 'antonio@email.it',
    password: 'password',
  };

  constructor(private authSvc: AuthService, private router: Router) {}

  signIn() {
    this.authSvc.login(this.loginData).subscribe((data) => {
      this.router.navigate(['/dashboard']);
    });
  }
}
