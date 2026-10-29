
import InteractiveList from "./InteractiveList";

const products = [
  { id: 1, name: "Ноутбук ASUS", category: "Ноутбуки", price: 24999 },
  { id: 2, name: "Миша Logitech", category: "Периферія", price: 899 },
  { id: 3, name: "Клавіатура HyperX", category: "Периферія", price: 2499 },
  { id: 4, name: "Монітор Samsung", category: "Монітори", price: 8999 },
  { id: 5, name: "Навушники HyperX", category: "Аудіо", price: 3999 },
  { id: 6, name: "Відеокарта RTX", category: "Комплектуючі", price: 15999 },
];

export default function PracticePage() {
  return (
    <main style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>Магазин техніки</h1>
      <p>Загальна кількість товарів: {products.length}</p>
      <InteractiveList products={products} />
    </main>
  );
}
