import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodopagePageRoutingModule } from './todopage-routing.module';

import { TodopagePage } from './todopage.page';
import { TodoListComponent } from '../component/todo-list/todo-list.component';
import { TodoItemComponent } from '../component/todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodopagePageRoutingModule
  ],
  declarations: [TodopagePage,TodoListComponent,TodoItemComponent]
})
export class TodopagePageModule {}
