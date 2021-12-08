import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoPanelComponent } from './todo-panel/todo-panel.component';
import { TodoAcceuilComponent } from './todo-acceuil/todo-acceuil.component';
import { TodoVizComponent } from './todo-viz/todo-viz.component';


const appRoutes: Routes = [
  { path: '', component: TodoAcceuilComponent },
  {path: 'list/:id', component:TodoListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoPanelComponent,
    TodoAcceuilComponent,
    TodoVizComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
