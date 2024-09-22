import { NgClass } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private router =inject(Router)
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verificamos si el usuario ha hecho scroll más de 50px
    if (window.pageYOffset > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
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
