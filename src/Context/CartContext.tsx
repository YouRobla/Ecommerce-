import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartContextType, CartItem } from '../Types/CartTypes';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setItems(currentItems => {
      
      const existingItemIndex = currentItems.findIndex(
        item => 
          item.product.id === newItem.product.id && 
          item.selectedColor === newItem.selectedColor && 
          item.selectedSize === newItem.selectedSize
      );

      if (existingItemIndex > -1) {
        
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      }

      return [...currentItems, newItem];
    });
  };

  const removeFromCart = (productId: string, color: string, size: string) => {
    setItems(currentItems => 
      currentItems.filter(item => 
        !(item.product.id === productId && 
          item.selectedColor === color && 
          item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: string, color: string, size: string, quantity: number) => {
    setItems(currentItems =>
      currentItems.map(item =>
        item.product.id === productId && 
        item.selectedColor === color && 
        item.selectedSize === size
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    clearCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};