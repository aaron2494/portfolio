import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements AfterViewInit{
  private map!: L.Map ;

  private initMap(): void {
    // Define las coordenadas del lugar "x"
    const location: L.LatLngTuple = [40.7128, -74.0060]; // Nueva York

    // Inicializa el mapa
    this.map = L.map('map', {
      center: location, // Centra el mapa en las coordenadas
      zoom: 10,         // Nivel de zoom inicial
    });

    // Agrega el mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Agrega un marcador en la ubicación
    L.marker(location).addTo(this.map)
      .bindPopup('Ubicación X')
      .openPopup();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}

