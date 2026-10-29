
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books {
  constructor(public bookService: BookService) {}

  get books() {
    return this.bookService.getItems();
  }
}
