import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tm-tc-ui';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation to:', event.url);
      }
    });
  }

  navigateToLogin() {
    console.log('Attempting to navigate to login');
    this.router.navigate(['/login']).then(nav => {
      console.log('Navigation login success:', nav);
    }, err => {
      console.error('Navigation login failed:', err);
    });
  }

  navigateToSignUp() {
    console.log('Attempting to navigate to sign up');
    this.router.navigate(['/sign-up']).then(nav => {
      console.log('Navigation sign up success:', nav);
    }, err => {
      console.error('Navigation sign up failed:', err);
    });
  }
  
  navigateToWelcome() {
    console.log('Attempting to navigate to login');
    this.router.navigate(['/']).then(nav => {
      console.log('Navigation welcome success:', nav);
    }, err => {
      console.error('Navigation welcome failed:', err);
    });
  }
}
