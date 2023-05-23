import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartBadge = () => {
  const { cartItems } = useContext(CartContext);

  // Calculate the total number of items in the Cart
  const totalItems = cartItems.length;

  return <span>{totalItems}</span>;
};

export default CartBadge;
