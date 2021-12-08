import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TodoItem {
  readonly label: string;
  readonly isDone: boolean;
  readonly id: number;
}

export interface TodoList {
  readonly label: string;
  readonly items: Readonly<TodoItem[]>;
  readonly icone: string;
}

export interface TodoListception {
  readonly list: Readonly<TodoList[]>;
}

let idItem = 0;
let idList = 1;

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  private current2: TodoListception = { list: [{ label: 'MIAGE', items: [], icone: "nuage.png" }, { label: 'Zone', items: [], icone: "point.png" }, { label: 'truc', items: [], icone: "dossier.png" }] }
  private subj2 = new BehaviorSubject<TodoListception>(this.current2);
  readonly observable2 = this.subj2.asObservable();

  private current: TodoList = this.subj2.getValue().list[1];
  private subj = new BehaviorSubject<TodoList>(this.current);
  readonly observable = this.subj.asObservable();
  private previous: TodoList[] = [];
  private futures: TodoList[] = [];

  constructor() {
    this.managePersistency(true);
    this.manageUndoRedo();
  }

  changeCurrent(id: number) {
    this.current = this.subj2.getValue().list[id];
    idList = id;
    this.subj.next(this.current);
    console.log(this.subj);
    this.previous = [];
    this.futures = [];
    this.managePersistency(false);
    this.manageUndoRedo();
  }

  append(...labels: Readonly<string[]>): this {
    const L: TodoList = this.subj.getValue();
    this.subj.next({
      ...L,
      items: [
        ...L.items,
        ...labels.filter(l => l !== '').map(
          label => ({ label, isDone: false, id: idItem++ })
        )
      ]
    });
    return this;
  }

  remove(...items: Readonly<TodoItem[]>): this {
    const L = this.subj.getValue();
    const NL = { ...L, items: L.items.filter(item => items.indexOf(item) === -1) };
    this.subj.next(NL);
    return this;
  }

  update(data: Partial<TodoItem>, ...items: Readonly<TodoItem[]>): this {
    if (data.label !== "") {
      const L = this.subj.getValue();
      const NL = { ...L, items: L.items.map(item => items.indexOf(item) >= 0 ? { ...item, ...data } : item) };
      this.subj.next(NL);
    } else {
      this.remove(...items);
    }
    return this;
  }

  updateTitle(label: string): this {
    const L = this.subj.getValue();
    const NL = { label: label, items: L.items, icone: L.icone };
    this.subj.next(NL);
    return this;
  }

  updateIcone(icone: string): this {
    const L = this.subj.getValue();
    const NL = { label: L.label, items: L.items, icone: icone };
    this.subj.next(NL);
    return this;
  }

  undo(): this {
    if (this.previous.length > 0) {
      this.subj.next(this.previous[this.previous.length - 1]);
    }
    return this;
  }

  redo(): this {
    if (this.futures.length > 0) {
      this.subj.next(this.futures[this.futures.length - 1]);
    }
    return this;
  }


  private managePersistency(mode: boolean) {
    if (mode) {
      const str = localStorage.getItem('TDL_L3_MIAGE');
      if (str && str !== tdlToString(this.current)) {
        this.subj.next(strToTdl(str));
      }
    } else {
      const str = localStorage.getItem('TDL_L3_MIAGE');
      if (str && str !== tdlToString(this.current)) {
        localStorage.setItem('TDL_L3_MIAGE', tdlToString(this.current));
      }
    }
  }


  private manageUndoRedo() {
    this.observable.subscribe(tdl => {
      if (tdl !== this.current) {
        localStorage.setItem('TDL_L3_MIAGE', tdlToString(tdl));
        // Undo-redo
        const indexInPrevious = this.previous.indexOf(tdl);
        if (indexInPrevious >= 0) { // Is it a previous version of the list ?
          const L = this.previous.splice(indexInPrevious, this.previous.length);
          this.futures.push(this.current, ...L.reverse());
          this.futures.pop(); // On enlève la liste courante
        } else {
          const indexInFutures = this.futures.indexOf(tdl);
          if (indexInFutures >= 0) { // Is it a future version of the list ?
            const L = this.futures.splice(indexInFutures, this.futures.length);
            this.previous.push(this.current, ...L.reverse());
            this.previous.pop();
          } else {
            // This is a new version
            if (this.futures.length) {
              const L = [...this.futures, this.current];
              const RL = [...L].reverse().map(TDL => ({ ...TDL }));
              RL.pop();
              this.previous.push(...RL, ...L);
            } else {
              this.previous.push(this.current);
            }
            this.futures = [];
          }
        }
        this.current = tdl;
      }
    });
  }

}

export function tdlToString2(tdl: TodoListception): string {
  return JSON.stringify(tdl);
}

export function tdlToString(tdl: TodoList): string {
  return JSON.stringify(tdl);
}

export function strToTdl2(str: string): TodoListception {
  const L: TodoListception = JSON.parse(str);
  return L;

}

export function strToTdl(str: string): TodoList {
  const L: TodoList = JSON.parse(str);
  idItem = L.items.reduce((id, item) => id <= item.id ? item.id + 1 : id, 0);
  return L;
}
