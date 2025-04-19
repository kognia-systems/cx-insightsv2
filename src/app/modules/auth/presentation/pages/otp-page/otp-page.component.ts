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
import { SubmitButtonComponent } from '@components/submit-button/submit-button.component';
import { WelcomeAnimatedTextComponent } from '@components/welcome-animated-text/welcome-animated-text.component';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/core/shared/services/local-storage.service';
import { UsersService } from 'src/app/modules/users/infrastructure/services/users.service';

@Component({
  selector: 'app-otp-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CxLogoComponent,
    SubmitButtonComponent,
    WelcomeAnimatedTextComponent,
  ],
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.scss',
})
export class OtpPageComponent {
  form: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private localStorageService: LocalStorageService,
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

    this.isLoading = true;

    const { otp } = this.form.value;

    try {
      const userId = this.localStorageService.getUserId();

      if (!userId) {
        this.toastService.error('No se encontró el ID de usuario');
        return;
      }

      this.userService.getUserById(userId).subscribe({
        next: (user) => {
          if (user) {
            this.localStorageService.setUser(user);
            this.localStorageService.clearUserId();

            this.toastService.success('Bienvenido a la aplicación');

            this.router.navigate(['/dashboard']);
          }
        },
      });
    } catch (error) {
      this.toastService.error(
        'Error al iniciar sesión, por favor verifica tus credenciales'
      );
    } finally {
      this.isLoading = false;
    }
  }

  get otp() {
    return this.form.get('otp');
  }
}
