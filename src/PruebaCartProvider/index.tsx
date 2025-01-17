import {ReactNode} from 'react';
import { createContext } from "react";
import { useState } from 'react';
interface CartProviderProps {
  children: ReactNode;
}

//Contexto del carrito
export const cartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    updateQuantity: () => {},
    calculateTotals: () => {},
});



export const CartProvider = ({ children }: CartProviderProps) => {
    const [items, setItems] = useState([]);

    const addItem = (newItem) => {
        const existingItem = items.find(item => item.id === newItem.id);
        if (existingItem) {
            updateQuantity(newItem.id, existingItem.quantity + 1);
            console.log(`Se actualizó la cantidad de ${existingItem.name} a ${existingItem.quantity + 1}`);
            
        } else {
            setItems([...items, newItem]);
            console.log(`Se agregó ${newItem.product.name} al carrito`);
        }
    };
    
    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };
    
    const clearCart = () => {
        setItems([]);
    };
    
    const updateQuantity = (id: number, quantity: number) => {
        setItems(items.map(item => 
            item.id === id 
                ? {...item, quantity} 
                : item
        ));
    };

 
    return (
        <cartContext.Provider value={{ items, addItem, removeItem, clearCart, updateQuantity }}>
            {children}
        </cartContext.Provider>
        
    );
};
