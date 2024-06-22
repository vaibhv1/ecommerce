import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
      <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductCard;