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
      title: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(1)]),
      description: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(1)]),
      done: new FormControl(false)
    });
    
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  getTitleErrorMessage(): string {
    const control = this.title;
    
    if (control?.hasError('maxlength')) {
      return '  Title cannot exceed 3 characters.';
    }
   
    return '';
  }

  getDescriptionErrorMessage(): string {
    const control = this.description;

    if (control?.hasError('maxlength')) {
      return '  Description cannot exceed 10 characters.';
    }
   
    return '';
  }

  onSubmit() {
    if (this.form.valid) {
      this.showDone = false;    
      this.tasks.push({ ...this.form.value }); //Agrega 
      console.log('Formulario valido y tarea agregada:', this.form.value);
      this.form.reset({ done: false }); //reinicia
    } else {
      console.log('Formulario inválido');
    }
  }

  updateTask(updatedTask: any) {
    const index = this.tasks.findIndex(task => task.title === updatedTask.title && task.description === updatedTask.description);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      console.log('Tarea actualizada:', updatedTask);
    }
  }


}
  

  







