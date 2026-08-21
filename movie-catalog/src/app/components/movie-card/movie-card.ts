import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  @Input() title = '';
  @Input() rating = 0;
  @Input() genre = '';
  @Input() year = 0;

  @Output() addedToFavorites = new EventEmitter<void>();

  addToFavorites() {
    this.addedToFavorites.emit();
  }
}