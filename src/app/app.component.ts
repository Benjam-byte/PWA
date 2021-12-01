import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TodolistService,TodoList,TodoItem } from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private _todolistService: TodolistService) {
  }

  get obsToDoList(): Observable<TodoList> {
    return this._todolistService.observable;
  }
      
  append(label:string) : void{
    this._todolistService.append(label);
  }

  remove(...item: Readonly<TodoItem[]>) {
    this._todolistService.remove(...item);
  }

  updateLabel(label: string, item: Readonly<TodoItem>,) {
    console.log(label);
    var t: Partial<TodoItem> = { label: label };
    this._todolistService.update(t,item);
  }

  updateDone(isDone: boolean, item: Readonly<TodoItem>,) {
    var d : Partial<TodoItem> = { isDone: isDone };
    this._todolistService.update(d,item);
  }


}
