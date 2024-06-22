import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
    
    // Remove the item if quantity is set to zero
    if (newQuantity === 0) {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;