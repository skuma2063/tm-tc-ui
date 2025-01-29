import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Basic validation
    if (this.username && this.password) {
      // Here you would typically call an authentication service
      console.log('Login attempt:', {
        username: this.username,
        password: this.password
      });

      // Navigate to dashboard or home page after login
      this.router.navigate(['/dashboard']); // Update with your actual route
    }
  }

}
