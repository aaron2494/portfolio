import { Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { ProyectsComponent } from "../proyects/proyects.component";
import { ContactComponent } from "../contact/contact.component";
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InicioComponent, ProyectsComponent, ContactComponent,SobreMiComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
