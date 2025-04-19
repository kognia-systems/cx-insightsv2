import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blueprint-section-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './blueprint-section-card.component.html',
  styleUrl: './blueprint-section-card.component.scss',
})
export class BlueprintSectionCardComponent {
  @Input() icon: string = 'info';
  @Input() title: string = 'Título';
  @Input() iconColor: string = 'text-primary';
  @Input() description: string = 'Descripción';
  @Output() onClick = new EventEmitter<void>();
}
