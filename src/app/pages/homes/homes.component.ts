import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Task } from '../../models/task.model';

@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css'
})
export class HomesComponent {
  tasks = signal <Task[]> ([
    {
      id: Date.now(),
      title: 'Instalar Angular CLI',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear componenetes',
      completed: false
    },
    {
      id: Date.now(),
      title: 'Crear servicio',
      completed: false
    },
  ]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  })

  changeHandler () {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
     //update va a crear un nuevo estado, lo agrega
     this.tasks.update((tasks)=> [...tasks, newTask])
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index))
  }

  toggleChecked(index: number) {
    this.tasks.update((value) =>
      value.map((task, position) => {
        if (position === index)
          return {
            ...task,
            completed: !task.completed,
          };
        return task;
      })
    );
  }

  //Para editar tareas, lo activamos con doble click a este método
  updateTaskEditingMode(index: number) {
    this.tasks.update((value) =>
      value.map((task, position) => {
        if (position === index)
          return {
            ...task,
            editing: true,
          };
        return {
          //esto lo hago para editar una sola a la vez y que las demás se pongan en false
          ...task,
          editing: false
        };
      })
    );
  }

  //Para actualizar la tarea editada
  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.tasks.update((value) =>
      value.map((task, position) => {
        if (position === index)
          return {
            ...task,
            title: input.value,
            editing: false
          };
        return task;
      })
    );
  }

}
