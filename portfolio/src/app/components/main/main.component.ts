import { Component } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { ProyectsComponent } from "../proyects/proyects.component";
import { ContactComponent } from "../contact/contact.component";
import { SobreMiComponent } from '../sobre-mi/sobre-mi.component';
import { ChatBotComponent } from "../chat-bot/chat-bot.component";
import { ButtomComponent } from "../chat-bot/buttom/buttom.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { MapComponent } from "../map/map.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InicioComponent, ProyectsComponent, ContactComponent, SobreMiComponent, ChatBotComponent, ButtomComponent, CalendarComponent, MapComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
