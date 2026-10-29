
import { Component } from '@angular/core';
import { MovieFormComponent } from './movie-form/movie-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieFormComponent],
  templateUrl: './app.html'
})
export class App {}
