
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieFormComponent {
  newItem = {
    title: '',
    director: '',
    description: ''
  };

  movies: any[] = [];
  submitted = false;

  addItem(form: NgForm): void {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movies.push({ ...this.newItem });

    form.resetForm();
    this.submitted = false;
  }
}
