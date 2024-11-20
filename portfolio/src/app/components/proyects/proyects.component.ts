import { AfterViewInit, Component, ElementRef, HostListener  } from'@angular/core';

import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
  export class ProyectsComponent implements AfterViewInit {
    cards: HTMLElement[] = [];

    constructor(private elRef: ElementRef) {}
  
    ngAfterViewInit(): void {
      // Obtén todas las cards
      this.cards = Array.from(this.elRef.nativeElement.querySelectorAll('.card'));
      this.checkVisibility();
    }
  
    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
      this.checkVisibility();
    }
  
    private checkVisibility(): void {
      const windowHeight = window.innerHeight;
  
      // Asegúrate de que cada tarjeta tiene la animación aplicada correctamente
      this.cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8) {
          // Aplica un retraso escalonado solo en escritorio (ancho > 768px)
          if (window.innerWidth > 768) {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 500); // Retraso de 300ms entre cartas
          } else {
            // En móviles, aplica la clase sin retraso
            card.classList.add('animate');
          }
        }
      });
    }
   }
  
