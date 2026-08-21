import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Movies } from './components/movies/movies';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Movies, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  siteName = 'MovieCatalog';
  message = '';

  onMovieAdded() {
    this.message = 'Фільм додано в обране';
  }
}