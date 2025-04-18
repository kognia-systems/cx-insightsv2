import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'password-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './password-input.component.html',
  styles: ``
})
export class PasswordInputComponent {
  @Input() control!: FormControl;
  @Input() type: string = 'password';
  @Input() label: string = 'Contraseña';
  @Input() placeholder: string = '******';
}
