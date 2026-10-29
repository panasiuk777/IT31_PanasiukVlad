
const books = [
  { title: "Кобзар", author: "Тарас Шевченко" },
  { title: "Тигролови", author: "Іван Багряний" },
  { title: "Лісова пісня", author: "Леся Українка" },
];

export default function FictionPage() {
  return (
    <div>
      <h3>Художня література</h3>
      <div className="book-grid">
        {books.map((book) => (
          <article className="book-card" key={book.title}>
            <div className="book-icon">📕</div>
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
