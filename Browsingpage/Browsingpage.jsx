import React, { useState } from "react";
import ReactDOM from "react-dom/client";

export default function ProductBrowser() {
  const categories = ["Electronics", "Books", "Clothing"];
  const productsData = {
    Electronics: [
      { id: 1, name: "Laptop", price: 1200 },
      { id: 2, name: "Smartphone", price: 800 },
    ],
    Books: [
      { id: 3, name: "React Guide", price: 30 },
      { id: 4, name: "JavaScript Handbook", price: 25 },
    ],
    Clothing: [
      { id: 5, name: "T-Shirt", price: 15 },
      { id: 6, name: "Jeans", price: 40 },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h3>Categories</h3>
        {categories.map((cat) => (
          <button
            key={cat}
            style={styles.catButton}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
        <div style={styles.cartSummary}>
          <strong>Cart:</strong> {cart.length} items
        </div>
      </aside>

      {/* Main content */}
      <main style={styles.main}>
        {!selectedCategory && <h2>Welcome! Select a category.</h2>}
        {selectedCategory && (
          <div>
            <h2>{selectedCategory}</h2>
            <div style={styles.productGrid}>
              {productsData[selectedCategory].map((p) => (
                <div key={p.id} style={styles.productCard}>
                  <h4>{p.name}</h4>
                  <p>${p.price}</p>
                  <button style={styles.button} onClick={() => addToCart(p)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  },
  sidebar: {
    width: "220px",
    background: "#f4f4f4",
    padding: "20px",
    boxSizing: "border-box",
  },
  catButton: {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  cartSummary: {
    marginTop: "20px",
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    padding: "20px",
    background: "#fff",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  productCard: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    textAlign: "center",
  },
  button: {
    marginTop: "8px",
    padding: "6px 10px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

// Render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProductBrowser />);
