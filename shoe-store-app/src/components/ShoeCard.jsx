import React from 'react';
import '../App.css'; // For basic styling

function ShoeCard({ shoe, onAddToCart }) {
  return (
    <div className="shoe-card">
      <img src={shoe.image} alt={shoe.name} />
      <h3>{shoe.name}</h3>
      <p>${shoe.price}</p>
      <button onClick={() => onAddToCart(shoe)}>Add to Cart</button>
    </div>
  );
}

export default ShoeCard;