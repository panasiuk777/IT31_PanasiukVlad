
"use client";

export default function CatalogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="error-box">
      <h2>Сталася помилка!</h2>
      <p>Не вдалося завантажити каталог.</p>
      <button className="button" onClick={() => reset()}>
        Спробувати знову
      </button>
      <details>
        <summary>Деталі помилки</summary>
        <p>{error.message}</p>
      </details>
    </div>
  );
}
