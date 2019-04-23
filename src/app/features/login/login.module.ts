import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    SignInComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'sign-in', component: SignInComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: '**', redirectTo: 'sign-in'},
    ])
  ]
})
export class LoginModule { }
