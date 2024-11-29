import { FormsModule, NgModel } from '@angular/forms';

import { Component } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent {
  questions = [
    { text: '¿Cuál es el horario de atención?', answer: 'Nuestro horario es de 9 AM a 5 PM de lunes a viernes.' },
    { text: '¿Dónde están ubicados?', answer: 'Estamos en la calle principal 123, Ciudad Central.' },
    { text: '¿Cómo puedo contactarlos?', answer: 'Puedes contactarnos al correo soporte@empresa.com.' },
  ];
  answer: string | null = null;

  selectQuestion(question: { text: string; answer: string }) {
    this.answer = question.answer;
  }
}
