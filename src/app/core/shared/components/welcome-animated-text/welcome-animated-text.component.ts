import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-welcome-animated-text',
  standalone: true,
  imports: [],
  templateUrl: './welcome-animated-text.component.html',
  styleUrl: './welcome-animated-text.component.scss',
})
export class WelcomeAnimatedTextComponent {
  welcomeText = [
    'Analiza audios y textos para extraer insights clave y mejorar tu toma de decisiones.',
    'Convierte conversaciones en datos accionables con nuestra solución de Inteligencia Artificial.',
    'Escucha, analiza y actúa: transforma el contenido en información útil para tu negocio.',
  ];
  ngAfterViewInit(): void {
    new Typed('#welcome-text', {
      strings: this.welcomeText,
      typeSpeed: 20,
      loop: true,
    });
  }
}
