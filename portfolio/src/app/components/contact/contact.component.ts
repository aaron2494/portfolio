import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import emailjs from 'emailjs-com';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule,FontAwesomeModule,NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const serviceID = 'your_service_id';
      const templateID = 'your_template_id';
      const userID = 'your_user_id';

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
