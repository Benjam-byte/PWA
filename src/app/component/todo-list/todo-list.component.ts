import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodoList, TodolistService } from '../../todolist.service';

type FctFilter = (item: TodoItem) => boolean;
type FctRem = () => void;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  public isEditing: boolean = false;
  public isImg: boolean = false;
  public name: string = "";

  @ViewChild('newTextInput') newTextInput!: ElementRef<HTMLInputElement>;

  public allCheck = true;

  public searchValue: string = '';
  public filterAll: FctFilter = function (item: TodoItem) {
    return true;
  }
  public filter: FctFilter = this.filterAll;

  public filterAct: FctFilter = function (item: TodoItem) {
    return !item.isDone;
  };
  public filterCom: FctFilter = function (item: TodoItem) {
    return item.isDone;
  };

  public remAll: FctRem;
  public remType!: FctRem
  public remAct!: FctRem;
  public remCom!: FctRem;

  constructor(private _todolistService: TodolistService) {
    this.remCom = function () {
      let items: Readonly<TodoItem[]> = [];
      this.obsToDoList.subscribe(result => items = result.items);
      items.forEach((item) => { if (item.isDone) this.remove(item) })
    };
    this.remAll = function () {
      let items: Readonly<TodoItem[]> = [];
      this.obsToDoList.subscribe(result => items = result.items);
      items.forEach((item) => { this.remove(item) })
    };
    this.remAct = function () {
      let items: Readonly<TodoItem[]> = [];
      this.obsToDoList.subscribe(result => items = result.items);
      items.forEach((item) => { if (!item.isDone) this.remove(item) })
    };
    this.remType = this.remAll;
  }

  ngOnInit(): void {
  }

  get obsToDoList(): Observable<TodoList> {
    return this._todolistService.observable;
  }


  undo() {
    this._todolistService.undo();
    this.updateChecked();
  }

  redo() {
    this._todolistService.redo();
    this.updateChecked();
  }
  
  nbItemRestant(tdlItem: readonly TodoItem[]): number {
    var rest: number = 0;
    for (var i: number = 0; i < tdlItem.length; i++) {
      if (!tdlItem[i].isDone) {
        rest = rest + 1;
      }
    }
    return rest;
  }
  

  updateChecked() {
    this.allCheck = true;
    var list: Readonly<TodoItem[]> = [];
    this.obsToDoList.subscribe(result => list = result.items);
    list.forEach(item => { if (!item.isDone) this.allCheck = false });
  }

  selectAll(p: Partial<TodoItem>) {
    var list: Readonly<TodoItem[]> = [];
    this.obsToDoList.subscribe(result => list = result.items);
    list.forEach(item => { this.update(p, item) });
    this.updateChecked();
  }
  
  remove(...item: Readonly<TodoItem[]>) {
    this._todolistService.remove(...item);
    this.updateChecked();
  }
  update(item: Partial<TodoItem>, item2: Readonly<TodoItem>) {
    this._todolistService.update(item, item2);
    this.updateChecked();
  }

  append(label: string): void {
    this._todolistService.append(label);
    this.searchValue = '';
    this.updateChecked();
  }

  setEditing(e: boolean) {
    this.isEditing = e;
    if (e) {
      requestAnimationFrame(
        () => this.newTextInput.nativeElement.focus()
      );
    }
  }

  updateTitle( label: string) {
    this._todolistService.updateTitle(label);
    this.setEditing(false);
  }

  updateIcone(icone: string) {
    this._todolistService.updateIcone(icone);
    this.setEditingImg(false);
  }

  setEditingImg(e: boolean) {
    this.isImg = e;
    console.log('mdr');
  }

}