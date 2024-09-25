import { Component, ElementRef, ViewChild } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
  export class ProyectsComponent { 
    
  }
  
  
