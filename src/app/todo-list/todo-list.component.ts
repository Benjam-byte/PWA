import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoItem, TodoList, TodolistService } from '../todolist.service';

type FctFilter = (item: TodoItem) => boolean;
type FctRem = () => void;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  public allCheck = true;

  public searchValue: string = '';
  public filterAll: FctFilter = function (item: TodoItem) {
    return true;
  }
  public filter: FctFilter = this.filterAll;

  public filterAct: FctFilter= function (item: TodoItem) {
    return !item.isDone;
  };
  public filterCom: FctFilter= function (item: TodoItem) {
    return item.isDone;
  };

  public remAll: FctRem;
  public remType! : FctRem
  public remAct!: FctRem;
  public remCom!: FctRem;

  constructor(private _todolistService: TodolistService,private route: ActivatedRoute) { 
    this.remCom = function () {
      let items: Readonly<TodoItem[]> = [];
      this.obsToDoList.subscribe(result => items = result.items);
      items.forEach((item) => { if (item.isDone) this.remove(item) })
    };
    this.remAll = function () {
      let items: Readonly<TodoItem[]> = [];
      this.obsToDoList.subscribe(result => items = result.items);
      items.forEach((item) => {this.remove(item) })
    };
    this.remAct = function () {
      let items: Readonly<TodoItem[]> = [];
      this.obsToDoList.subscribe(result => items = result.items);
      items.forEach((item) => { if (!item.isDone) this.remove(item) })
    };
    this.remType = this.remAll;
  }

  ngOnInit(): void {
    this.updateChecked();
    this.route.params.subscribe(params => { console.log(params); this._todolistService.changeCurrent(params.id) } );
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
  
  nbItemRestant(tdlItem:  readonly TodoItem[]): number{
    var rest: number = 0;
    for (var i: number = 0; i < tdlItem.length; i++){
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

  selectAll(p :Partial<TodoItem>) {
    var list: Readonly<TodoItem[]> = [];
    this.obsToDoList.subscribe(result => list = result.items);
    list.forEach(item => { this.update(p, item) });
    this.updateChecked();
  }
  
  remove(...item: Readonly<TodoItem[]>) {
    this._todolistService.remove(...item);
    this.updateChecked();
  }
  update(item:Partial<TodoItem>, item2: Readonly<TodoItem>) {
    this._todolistService.update(item, item2);
    this.updateChecked();
  }

  updateTitle( label: string) {
    this._todolistService.updateTitle(label);
  }

  updateIcone(icone: string) {
    this._todolistService.updateIcone(icone);
  }

  append(label: string): void{
    this._todolistService.append(label);
    this.searchValue = '';
    this.updateChecked();
  }


}
