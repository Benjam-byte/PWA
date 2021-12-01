import { AsyncPipe } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodoList, TodolistService } from '../todolist.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  public searchValue: string = '';
  public editing: Array<string> = [];
  public list: TodoItem[] = [];
  

  constructor(private _todolistService: TodolistService) { 
    this.obsToDoList.forEach(e => { this.initClass(e.items) });
    this.filterTous();
  }

  get obsToDoList(): Observable<TodoList> {
    return this._todolistService.observable;
  }

  initClass(item: readonly TodoItem[]): void {
    for (var i: number = 0; i < item.length; i++){
      this.getCheckedText(item[i], i);
    }
  }


  resyncClass(item: readonly TodoItem[], ind: number) {
    if (this.editing[ind] === "editing") {
      
    } else {
      this.initClass(item);
    }
  }


  getCheckedText(item: Partial<TodoItem>,ind:number) {
    if (item.isDone) {
      this.editing[ind] = "completed";
    } else {
      this.editing[ind] = "";
    }
    return this.editing[ind];
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
  
  ngOnInit(): void {
  }

  edit(v: number,ind :number) {
    if (v === 0) {
      this.editing[ind] = "";
    } else {
      this.editing[ind]  = "editing";
    }
  }
  
  remove(...item: Readonly<TodoItem[]>) {
    console.log(item);
    this._todolistService.remove(...item);
    console.log("je remove");
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

  update(item:Partial<TodoItem>, item2: Readonly<TodoItem>,ind:number) {
    this._todolistService.update(item, item2);
    this.getCheckedText(item, ind);
  }

  append(label: string): void{
    this._todolistService.append(label);
    this.searchValue = '';
  }

  filterTous() {
    this.obsToDoList.forEach(e => { this.list = e.items.slice(0, e.items.length) });
    this.initClass(this.list);
  }

  filterActif(mode : boolean) {
    this.obsToDoList.forEach(e => { this.list = e.items.slice(0, e.items.length) });
    var res: TodoItem[] = [];
    for (var i: number = 0; i<this.list.length; i++){
      if (mode) {
        if (!this.list[i].isDone) {
          res.push(this.list[i]);
        }
      } else {
        if (this.list[i].isDone) {
          res.push(this.list[i]);
        }
      }
     
    }
    this.list = res.slice(0, res.length);
    this.initClass(this.list);
  }

  removeFromTab(tab: any, e: any) {
    var ind = tab.indexOf(e)+1;
    tab.splice(ind, 1);
    return tab;
  }

  selectAll() {
    var res: boolean = true;
    for (var i: number = 0; i < this.list.length; i++) { 
      if (!this.list[i].isDone) {
        res = false;
      }
    }
    if (res) {
      for (var i: number = 0; i < this.list.length; i++) { 
        this.updateDone(false, this.list[i]);
      }
    }else {
      for (var i: number = 0; i < this.list.length; i++) { 
        this.updateDone(true, this.list[i]);
      }
    }
   
  }


}
