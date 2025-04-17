import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { CxLogoComponent } from '../../../../../core/shared/components/cx-logo/cx-logo.component';
import { WelcomeAnimatedTextComponent } from 'src/app/core/shared/components/welcome-animated-text/welcome-animated-text.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmailInputComponent } from "../../../../../core/shared/components/email-input/email-input.component";
import { PasswordInputComponent } from "../../../../../core/shared/components/password-input/password-input.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CxLogoComponent,
    WelcomeAnimatedTextComponent,
    EmailInputComponent,
    PasswordInputComponent
],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  form: FormGroup;
  showPassword = false;

  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.error('Error', this.form.get('password')?.errors);
      console.error('Form no válido', this.form.errors);
      return;
    }
    const { email, password } = this.form.value;
    console.log('Form válido', this.form.value);
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }
}
