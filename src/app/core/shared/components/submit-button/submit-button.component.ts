import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'submit-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './submit-button.component.html',
  styles: ``
})
export class SubmitButtonComponent {
  @Input() label: string = '';
  @Input() class: string = '';
  @Input() loadingText: string = 'Cargando...';
  @Input() isLoading: boolean = false;
}
