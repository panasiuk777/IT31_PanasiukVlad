
"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
};

export default function InteractiveList({
  products,
}: {
  products: Product[];
}) {
  const [query, setQuery] = useState("");
  const [onlyCheap, setOnlyCheap] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesPrice = !onlyCheap || product.price <= 10000;

    return matchesName && matchesPrice;
  });

  return (
    <section>
      <h2>Каталог товарів</h2>

      <input
        type="text"
        placeholder="Пошук товару..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "15px",
        }}
      />

      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            checked={onlyCheap}
            onChange={(e) => setOnlyCheap(e.target.checked)}
          />{" "}
          Тільки до 10 000 грн
        </label>
      </div>

      <p>Знайдено товарів: {filteredProducts.length}</p>

      {filteredProducts.length === 0 ? (
        <p>Нічого не знайдено</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              style={{
                padding: "12px",
                marginBottom: "10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            >
              <strong>{product.name}</strong>
              <p>Категорія: {product.category}</p>
              <p>Ціна: {product.price.toLocaleString("uk-UA")} грн</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
