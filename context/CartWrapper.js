import { useCallback, useState } from "react";
import { CartContext } from "./CartContext";

const CartWrapper = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = () => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

    if (isItemInCart){
        setCartItems(
            cartItems.map((cartItem) => 
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1}
              : cartItem
            )
        )
    } else {
        setCartItems([...cartItems, { ...item, quantity: 1}])
    }

  }

  const clearCart = () => {
    setCartItems([])
  }

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)
    
    if (isItemInCart.quantity == 1) {
        // Remove the item, keep the rest
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
    } else {
        setCartItems(
            cartItems.map((cartItem) => 
             cartItem.id === item.id
             ? { ...cartItem, quantity: cartItem.quantity -1}
             : cartItem
            )
        )
    }

  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
        value={{ 
           cartItems,
           addToCart,
           removeFromCart,
           clearCart,
           getCartTotal

         }}>
      {children}
    </CartContext.Provider>

  )
};

export default CartWrapper;