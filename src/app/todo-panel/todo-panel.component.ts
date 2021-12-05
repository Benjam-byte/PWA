import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../todolist.service';

@Component({
  selector: 'app-todo-panel',
  templateUrl: './todo-panel.component.html',
  styleUrls: ['./todo-panel.component.scss']
})
export class TodoPanelComponent implements OnInit {

  @Output() update = new EventEmitter<string>();
  @Output() updateI = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  updateTitle(label:string) {
    this.update.emit(label);
  }

  updateIcone(nom: string) {
    this.updateI.emit(nom + ".png");
  }

}
