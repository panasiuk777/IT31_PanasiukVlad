
import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <h2>Ласкаво просимо до онлайн-бібліотеки!</h2>
      <p>
        Тут ви можете переглядати каталог книг,
        знаходити художню та наукову літературу.
      </p>
      <Link className="button" href="/catalog">
        Переглянути каталог
      </Link>
    </section>
  );
}
