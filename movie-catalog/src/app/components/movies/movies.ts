import { Component, EventEmitter, Output } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movies',
  imports: [MovieCard],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class Movies {
  @Output() movieAdded = new EventEmitter<void>();

  movies = [
    {
      title: 'Interstellar',
      genre: 'Фантастика',
      year: 2014,
      rating: 8.7
    },
    {
      title: 'Inception',
      genre: 'Фантастика',
      year: 2010,
      rating: 8.8
    },
    {
      title: 'The Dark Knight',
      genre: 'Бойовик',
      year: 2008,
      rating: 9.0
    }
  ];

  onMovieAdded() {
    this.movieAdded.emit();
  }
}