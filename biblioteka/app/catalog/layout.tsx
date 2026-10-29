
import Link from "next/link";

export default function CatalogLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <h2>Каталог книг</h2>
      <div className="subnav">
        <Link href="/catalog">Усі книги</Link>
        <Link href="/catalog/fiction">Художня література</Link>
        <Link href="/catalog/science">Наукова література</Link>
      </div>
      {children}
    </section>
  );
}
