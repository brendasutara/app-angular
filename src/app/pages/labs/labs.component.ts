import { Component, signal } from '@angular/core';

import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  //esto seria propiedades de esta clase
  welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = signal ([
    'Instalar Angular CLI',
    'Crear proyecto',
    'Crear componenetes',
    'Crear servicio',
  ]);
  //Le ponemos signals a cualquier cosa que sea modificable y que necesitemos que cambie el html
  name = signal('Brenda');
  age = 27;
  disabled = true;
  img = 'https://cdn.pixabay.com/photo/2021/10/05/17/24/owl-figurine-6683338_640.jpg';

  person = signal({
    name: 'Cata',
    age: 27,
    avatar: 'https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg'
  });

  colorCtrl = new FormControl();
  //Yo quiero controlar el ancho por una propiedad de HTML
  widthCtrl = new FormControl(50, {
    nonNullable: true,
  });
  nameCtrl = new FormControl('Brenda', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  //Leer este value desde la lógica
  constructor() {
    this.colorCtrl.valueChanges.subscribe( value => {
      console.log(value);
    })
  }

  //metodo de la clase, una funcion dentro de este componente
  clickHandler() {
    alert('Hola ' + this.person().name + '! vos tenés ' + this.person().age + ' años')
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

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue, 10)
      }
    });
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    });
  }
}
