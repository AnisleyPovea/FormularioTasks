import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';
import { TaskListComponent } from 'src/app/task-list/task-list.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    HomePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePage, TaskListComponent]
  
})
export class HomePageModule {}
