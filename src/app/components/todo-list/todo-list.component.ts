import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo-service.service";
import { Todo } from "../../interface/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle.trim());
      this.newTodoTitle = '';
    }
  }

  editTodo(todo: Todo): void {
    todo.editing = !todo.editing;
    if (!todo.editing) {
      this.todoService.editTodo(todo);
    }
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }
}
