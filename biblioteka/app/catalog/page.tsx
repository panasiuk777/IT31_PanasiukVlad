
const books = [
  { title: "Кобзар", author: "Тарас Шевченко", category: "Поезія" },
  { title: "Тигролови", author: "Іван Багряний", category: "Роман" },
  { title: "Коротка історія часу", author: "Стівен Гокінг", category: "Наука" },
  { title: "Лісова пісня", author: "Леся Українка", category: "Драма" },
];

export default async function CatalogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <p>Книги нашої онлайн-бібліотеки:</p>
      <div className="book-grid">
        {books.map((book) => (
          <article className="book-card" key={book.title}>
            <div className="book-icon">📖</div>
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Категорія: {book.category}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
