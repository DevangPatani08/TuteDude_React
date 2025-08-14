import React from 'react';
import '../App.css'; // For basic styling

function CartItem({ item, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" /> {/* Added image */}
      <div className="cart-item-details">
        <span>{item.name}</span>
        <span>Price: ${item.price}</span>
      </div>
      <div className="cart-item-quantity-controls">
        <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
      </div>
    </div>
  );
}

export default CartItem;