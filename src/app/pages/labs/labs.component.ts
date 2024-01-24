import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  //esto seria propiedades de esta clase
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componenetes',
    'Crear servicio',
  ];
  //Le ponemos signals a cualquier cosa que sea modificable y que necesitemos que cambie el html
  name = signal('Brenda');
  age = 27;
  disabled = true;
  img = 'https://cdn.pixabay.com/photo/2021/10/05/17/24/owl-figurine-6683338_640.jpg';

  person = {
    name: 'Cata',
    age: 27,
    avatar: 'https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg'
  }

  //metodo de la clase, una funcion dentro de este componente
  clickHandler() {
    alert('Hola ' + this.person.name + '! vos tenés ' + this.person.age + ' años')
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHanler (event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
