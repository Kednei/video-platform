import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; // Importa o CommonModule

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], // Adiciona o CommonModule nos imports
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  loginWithGoogle(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }
}
