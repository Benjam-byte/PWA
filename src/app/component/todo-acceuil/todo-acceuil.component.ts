import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListception, TodolistService } from '../../todolist.service';


@Component({
  selector: 'app-todo-acceuil',
  templateUrl: './todo-acceuil.component.html',
  styleUrls: ['./todo-acceuil.component.scss']
})
export class TodoAcceuilComponent implements OnInit {
  
  public isEditing: boolean = false;
  public name: string = "";

  @ViewChild('newTitleInput') newTitleInput!: ElementRef<HTMLInputElement>;

  constructor(private _todolistService: TodolistService) { }

  ngOnInit(): void {
    this.obsToDoList.subscribe(res => this.name = res.name);
    console.log(this.name);
  }

  get obsToDoList(): Observable<TodoListception> {
    return this._todolistService.observable2;
  }

  appendList() {
    this._todolistService.appendList();
  }

  setEditing(e: boolean) {
    this.isEditing = e;
    if (e) {
      requestAnimationFrame(
        () => this.newTitleInput.nativeElement.focus()
      );
    }
  }

  updateTitle(label: string) {
    this._todolistService.updtateListName(label);
    this.setEditing(false);
  }

}