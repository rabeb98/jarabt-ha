import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Observable<Todo[]>;
  constructor(http: HttpClient) {
    this.todos = http.get<Todo[]>('/api/todos');
  }
}
