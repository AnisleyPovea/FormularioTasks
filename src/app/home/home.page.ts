import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup;
  showDone: boolean = false;
  tasks: any[] = []; 

  name = new FormControl('');
  constructor() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      done: new FormControl(false)
    });

  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }


  onSubmit() {
    if (this.form.valid) {
      this.showDone = false;    
      this.tasks.push(this.form.value);//agrega al array
      console.log('Formulario valido y tarea agregada:', this.form.value);
      this.form.reset({ done: false }); //resetea
    } else {
      console.log('Formulario inválido');
    }
  }

  updateTask(updatedTask: any) {
    const index = this.tasks.findIndex(task => task === updatedTask);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
    }
  }

  


}






