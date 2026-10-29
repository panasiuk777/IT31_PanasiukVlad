
const books = [
  { title: "Коротка історія часу", author: "Стівен Гокінг" },
  { title: "Космос", author: "Карл Саган" },
  { title: "Світ науки", author: "Наукова колекція" },
];

export default function SciencePage() {
  return (
    <div>
      <h3>Наукова література</h3>
      <div className="book-grid">
        {books.map((book) => (
          <article className="book-card" key={book.title}>
            <div className="book-icon">📘</div>
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
