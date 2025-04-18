import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { CxLogoComponent } from '@components/cx-logo/cx-logo.component';
import { EmailInputComponent } from '@components/email-input/email-input.component';
import { WelcomeAnimatedTextComponent } from '@components/welcome-animated-text/welcome-animated-text.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CxLogoComponent,
    EmailInputComponent,
    WelcomeAnimatedTextComponent,
  ],
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.scss',
})
export class ResetPasswordPageComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastrService,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { email } = this.form.value;

    this.authService.resetPassword(email).then(
      () => {
        this.toastService.success(
          'A password reset link has been sent to your email address.',
          'Success',
        );
        this.router.navigate(['/auth/login']);
      },
      (err) => {
        console.error(err);
        this.toastService.error(
          'An error occurred while resetting the password. Please try again later.',
          'Error',
        );
      }
    );
  }

  get email() {
    return this.form.get('email') as FormControl;
  }
}
