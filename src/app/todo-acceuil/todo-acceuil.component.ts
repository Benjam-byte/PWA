import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListception, TodolistService } from '../todolist.service';

@Component({
  selector: 'app-todo-acceuil',
  templateUrl: './todo-acceuil.component.html',
  styleUrls: ['./todo-acceuil.component.scss']
})
export class TodoAcceuilComponent implements OnInit {

  constructor(private _todolistService: TodolistService) { }

  ngOnInit(): void {
  }

  get obsToDoList(): Observable<TodoListception> {
    return this._todolistService.observable2;
  }

  appendList() {
    this._todolistService.appendList();
  }

}
