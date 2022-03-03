import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Itodo } from "../itodo";
let _id = 0;
@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.scss"],
})

export class TodoComponent implements OnInit {
  todos : Itodo[] = [];
  content = new FormControl();
  constructor() {}

  ngOnInit(): void {}

  toggleTodo(i:number):void{
    this.todos[i].complete = !this.todos[i].complete;
  }

  change(){
    let value = this.content.value;
    if(value){
      const todo : Itodo = {
        id: _id++,
        content: value,
        complete: false
      }
      this.todos.push(todo);
      this.content.reset();
    }
  }
}
