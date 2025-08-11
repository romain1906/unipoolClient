import { Component } from '@angular/core';
import { materialModules } from '../material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    materialModules // Spread operator to include all material modules,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/home']);
  }
}
