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

  changeHandler (event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    //update va a crear un nuevo estado
    this.tasks.update((tasks)=> [...tasks, newTask])
  }
}
