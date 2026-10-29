
import { Injectable } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      title: '1984',
      author: 'Джордж Орвелл',
      description: 'Роман-антиутопія про тоталітарне суспільство.'
    },
    {
      id: 2,
      title: 'Кобзар',
      author: 'Тарас Шевченко',
      description: 'Збірка поетичних творів українського письменника.'
    },
    {
      id: 3,
      title: 'Маленький принц',
      author: 'Антуан де Сент-Екзюпері',
      description: 'Казка про дружбу, любов і відповідальність.'
    }
  ];

  getItems(): Book[] {
    return this.books;
  }

  getItemById(id: number): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  addItem(item: Omit<Book, 'id'>): void {
    const id = this.books.length
      ? Math.max(...this.books.map(book => book.id)) + 1
      : 1;

    this.books.push({ id, ...item });
  }
}
