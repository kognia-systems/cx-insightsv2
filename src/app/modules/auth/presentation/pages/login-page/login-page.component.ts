import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CxLogoComponent } from '@components/cx-logo/cx-logo.component';
import { EmailInputComponent } from '@components/email-input/email-input.component';
import { PasswordInputComponent } from '@components/password-input/password-input.component';
import { WelcomeAnimatedTextComponent } from '@components/welcome-animated-text/welcome-animated-text.component';
import { AuthService } from '@auth/auth.service';
import { UsersService } from 'src/app/modules/users/infrastructure/services/users.service';
import { ToastrService } from 'ngx-toastr';

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
    PasswordInputComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  form: FormGroup;
  showPassword = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UsersService,
    private toastService: ToastrService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.value;

    try {
      const userCredentials = await this.authService.login(email, password);

      if (userCredentials) {
        localStorage.setItem('userId', userCredentials.user.uid);
        this.toastService.success(
          'Se ha enviado un código de verificación a tu correo',
          'OTP Enviado'
        );
        this.router.navigate(['/auth/otp-verification']);
      }
    } catch (error) {
      this.toastService.error(
        'Error al iniciar sesión, por favor verifica tus credenciales'
      );
    }
  }

  get email() {
    return this.form.get('email') as FormControl;
  }

  get password() {
    return this.form.get('password') as FormControl;
  }

  private getErrorMessage(code: string): string {
    const map: Record<string, string> = {
      'auth/user-not-found': 'Usuario no encontrado',
      'auth/wrong-password': 'Contraseña incorrecta',
      'auth/invalid-email': 'Correo inválido',
    };
    return map[code] ?? 'Error al iniciar sesión';
  }
}
