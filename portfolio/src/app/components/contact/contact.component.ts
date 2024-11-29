import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import emailjs from 'emailjs-com';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,FontAwesomeModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  container: HTMLElement[] = [];
  constructor(private fb: FormBuilder,private elRef: ElementRef) {}
  ngAfterViewInit(): void {
    // Obtén todas las cards
    this.container = Array.from(this.elRef.nativeElement.querySelectorAll('.container'));
    this.checkVisibility();
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.checkVisibility();
  }
  private checkVisibility(): void {
    const windowHeight = window.innerHeight;

    // Asegúrate de que cada tarjeta tiene la animación aplicada correctamente
    this.container.forEach((container, index) => {
      const rect = container.getBoundingClientRect();
      if (rect.top < windowHeight * 0.8) {
        // Aplica un retraso escalonado solo en escritorio (ancho > 768px)
        if (window.innerWidth > 768) {
          setTimeout(() => {
            container.classList.add('animate');
          }, index * 500); // Retraso de 300ms entre cartas
        } else {
          // En móviles, aplica la clase sin retraso
          container.classList.add('animate');
        }
      }
    });
  }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const serviceID = 'service_23f1zaj';
      const templateID = 'template_wb0ybs9';
      const userID = 'u8Vz8nts2MqNMtH5E';

      const params = {
        name: this.contactForm.get('name')?.value,
        email: this.contactForm.get('email')?.value,
        message: this.contactForm.get('message')?.value,
      };

      emailjs.send(serviceID, templateID, params, userID)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('¡Correo enviado con éxito!');
        }, (error) => {
          console.log('FAILED...', error);
          alert('Hubo un error al enviar el correo.');
        });
    }
  }
}
