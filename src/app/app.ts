import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from './services/book';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = '';
  author = '';
  pages: number | null = null;

  constructor(private bookService: BookService) {}

  get books() {
    return this.bookService.getBooks();
  }

  addBook() {
    if (
      this.title.trim() !== '' &&
      this.author.trim() !== '' &&
      this.pages !== null &&
      this.pages > 0
    ) {
      this.bookService.addBook(
        this.title.trim(),
        this.author.trim(),
        this.pages
      );

      this.title = '';
      this.author = '';
      this.pages = null;
    }
  }

  removeBook(id: number) {
    this.bookService.removeBook(id);
  }
}