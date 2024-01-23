import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componenetes',
    'Crear servicio',
  ];
  name = 'Brenda';
  age = 27;
  disabled = true;
  img = 'https://cdn.pixabay.com/photo/2021/10/05/17/24/owl-figurine-6683338_640.jpg'
}
