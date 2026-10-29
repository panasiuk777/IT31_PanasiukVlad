
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css'
})
export class AddBook {
  title = '';
  author = '';
  description = '';
  submitted = false;

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  addBook(): void {
    this.submitted = true;

    this.bookService.addItem({
      title: this.title.trim(),
      author: this.author.trim(),
      description: this.description.trim()
    });

    this.router.navigate(['/books']);
  }
}
