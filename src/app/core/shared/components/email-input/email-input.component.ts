import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'email-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
})
export class EmailInputComponent {
  @Input() control!: FormControl;
  @Input() label: string = 'Correo electrónico';
  @Input() placeholder: string = 'usuario@correo.com';
}
