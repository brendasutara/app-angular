import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css'
})
export class HomesComponent {
  tasks = signal ([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componenetes',
    'Crear servicio',
  ]);
}
