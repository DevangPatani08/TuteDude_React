import React from 'react';
import CartItem from './CartItem';
import '../App.css'; // For basic styling

function Cart({ cartItems, onUpdateQuantity, cartTotal }) { // Renamed prop
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} />
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;