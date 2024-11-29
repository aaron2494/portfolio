import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // CommonModule es suficiente en un componente standalone
import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    CommonModule,  // Esto es suficiente en un componente standalone
      // Solo si necesitas animaciones
    MatNativeDateModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements AfterViewInit {
  container: HTMLElement[] = [];

    constructor(private elRef: ElementRef) {}
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
  
  selectedDate: Date | null = null;
  availableSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
  ];
  reservedSlot: string | null = null;

  reserveSlot(slot: string): void {
    this.reservedSlot = slot;
    alert(`Turno reservado para ${this.selectedDate?.toLocaleDateString()} a las ${slot}`);
  }
}
