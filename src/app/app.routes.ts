import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

export const routes: Routes = [
    { path: '', component: WelcomeScreenComponent }, // Home route
    { path: 'login', component: LoginComponent },    // Login route
    { path: 'sign-up', component: SignUpComponent }, // Sign Up route
    { path: '**', redirectTo: '' }                   // Fallback route
];