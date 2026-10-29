
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Онлайн-бібліотека",
  description: "Онлайн-бібліотека книг",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body>
        <header className="header">
          <h1>📚 Онлайн-бібліотека</h1>
          <nav>
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/catalog/fiction">Художня література</Link>
            <Link href="/catalog/science">Наукова література</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          © 2026 Онлайн-бібліотека
        </footer>
      </body>
    </html>
  );
}
