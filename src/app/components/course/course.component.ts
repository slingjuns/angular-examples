import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';
import {FormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-course',
  imports: [FormsModule, CommonModule],
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit {
  todos: Todo[] = [];
  filteredTodos: Todo[] = []; // Add a new property to hold the filtered todos
  searchId: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getAll().subscribe((todos) => {
      this.todos = todos.slice(0, 20); // Take only the first 20
      this.filteredTodos = this.todos; // Initially, display all todos
      console.log(todos);
    });
  }

  searchById() {
    if (this.searchId.length === 0) {
      this.filteredTodos = this.todos; // If the search field is empty, display all todos
    } else {
      const id = parseInt(this.searchId);
      this.todoService.getById(id).subscribe(
        (todo) => {
          this.filteredTodos = [todo]; // If the todo is found, display only that todo
        },
        (error) => {
          this.filteredTodos = []; // If the todo is not found, display an empty list
        }
      );
    }
  }
}
