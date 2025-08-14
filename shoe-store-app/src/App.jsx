import React, { useState } from 'react';
import ShoeCard from './components/ShoeCard';
import Cart from './components/Cart';
import './App.css'; // We'll update this CSS file

function App() {
  const [availableShoes, setAvailableShoes] = useState([
    { id: 1, name: 'Nike Classic Sneaker', price: 75, image: 'https://mynicefootwear.com/wp-content/uploads/2021/09/51.jpeg' }, // Example Image URL
    { id: 2, name: 'Nike Running Shoes', price: 80, image: 'https://m.media-amazon.com/images/I/710bos0ctYL._UY1000_.jpg' },   // Example Image URL
    { id: 3, name: 'Adidas Ultraboost', price: 120, image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg' },
    { id: 4, name: 'Puma RS-X', price: 90, image: 'https://sc04.alicdn.com/kf/H2a4665343d4b4e62b8df4aa562abcfafd.jpg' },
    { id: 5, name: 'Reebok Classic', price: 60, image: 'https://images-cdn.ubuy.co.in/67a60c419822ad00f833f937-sosenfer-slip-on-trainers-men-39-s.jpg' },
    { id: 6, name: 'New Balance 990', price: 150, image: 'https://m.media-amazon.com/images/I/71JjpmERc+L._UY1000_.jpg' },
  ]);

  const [cart, setCart] = useState([]);

  // Handles adding to cart from ShoeCard
  const handleAddToCart = (shoe) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === shoe.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  // Handles increasing/decreasing quantity directly in the cart
  const updateCartItemQuantity = (shoeId, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === shoeId ? { ...item, quantity: item.quantity + delta } : item
      ).filter((item) => item.quantity > 0); // Remove if quantity is 0 or less
      return updatedCart;
    });
  };

  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Shoe Store</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="available-shoes">
          <h2>Available Shoes</h2>
          <div className="shoe-list">
            {availableShoes.map((shoe) => (
              <ShoeCard key={shoe.id} shoe={shoe} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </section>

        <section className="shopping-cart">
          <Cart
            cartItems={cart}
            onUpdateQuantity={updateCartItemQuantity} // Pass the new update function
            cartTotal={calculateCartTotal()}
          />
        </section>
      </main>
    </div>
  );
}

export default App;