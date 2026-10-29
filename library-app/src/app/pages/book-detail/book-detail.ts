
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService, Book } from '../../services/book';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-detail.html',
  styleUrl: './book-detail.css'
})
export class BookDetail {
  book?: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.book = this.bookService.getItemById(id);
    });
  }
}
