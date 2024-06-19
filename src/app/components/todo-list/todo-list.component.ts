import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo-service.service";
import { Todo } from "../../interface/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todos: string[] = [];
  newTodo: string = "";

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = "";
      this.todos = this.todoService.getTodos(); // Update todos
    }
  }

  deleteTodo(index: number): void {
    this.todoService.deleteTodo(index);
    this.todos = this.todoService.getTodos(); // Update todos
  }
}
