import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CxLogoComponent } from '@components/cx-logo/cx-logo.component';
import { WelcomeAnimatedTextComponent } from '@components/welcome-animated-text/welcome-animated-text.component';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/core/shared/services/session.service';
import { UsersService } from 'src/app/modules/users/infrastructure/services/users.service';

@Component({
  selector: 'app-otp-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CxLogoComponent,
    WelcomeAnimatedTextComponent,
  ],
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.scss',
})
export class OtpPageComponent {
  form: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private sessionService: SessionService,
    private userService: UsersService,
    private toastService: ToastrService
  ) {
    this.form = this.fb.group({
      otp: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^\d+$/),
      ],
      ],
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { otp } = this.form.value;

    try {
      const userId = sessionStorage.getItem('userId');

      if (!userId) {
        this.toastService.error('No se encontró el ID de usuario');
        return;
      }

      this.userService.getUserById(userId).subscribe({
        next: (user) => {
          if (user) {
            this.sessionService.setUser(user);

            this.toastService.success('Bienvenido a la aplicación');

            this.router.navigate(['/dashboard']);
          }
        },
      });
    } catch (error) {
      this.toastService.error(
        'Error al iniciar sesión, por favor verifica tus credenciales'
      );
    }
  }

  get otp() {
    return this.form.get('otp');
  }
}
