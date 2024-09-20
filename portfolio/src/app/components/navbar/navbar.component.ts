import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private router =inject(Router)
  constructor(){

  }
  scrollToSection(section: string): void {
    // Navega a la ruta principal y al fragmento, si es necesario
    this.router.navigate(['/'], { fragment: section }).then(() => {
      // Forza el scroll incluso si ya estás en la URL
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView();
      }
    });
  }
}
