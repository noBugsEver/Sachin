import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Modals/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  desc:string;
  type:string;
  @Output() todoAdd:EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
   onSubmit(){
    const todo = {
      title:this.title,
      desc:this.desc,
      active:true,
      type:this.type
    }
    this.todoAdd.emit(todo);
   }
  }
