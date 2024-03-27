import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  todo: Todo;
  id: number = -1;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router // Inject the Router for navigation
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id')) ?? 0;
    this.todoService.getById(this.id).subscribe((todo) => {
      this.todo = todo;
    });
  }

  deleteTodo() {
    if (this.id >= 0) {
      this.todoService.deleteById(this.id).subscribe(() => {
        this.router.navigate(['/courses']); // Navigate back to the main page
      });
    }
  }
}
