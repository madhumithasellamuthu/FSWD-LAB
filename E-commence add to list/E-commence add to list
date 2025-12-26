import { useState } from "react";

export default function ProductListing() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Keyboard", price: 100 }
  ];

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>Products</h2>
        <div>Cart: {cart.length}</div>
      </header>

      <div style={styles.products}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Optional: Cart Details */}
      {cart.length > 0 && (
        <div style={styles.cart}>
          <h3>Cart Items</h3>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>
            Total: ${cart.reduce((sum, item) => sum + item.price, 0)}
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  products: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px"
  },
  productCard: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "12px",
    textAlign: "center"
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px"
  },
  cart: {
    marginTop: "30px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    background: "#f9f9f9"
  }
};
