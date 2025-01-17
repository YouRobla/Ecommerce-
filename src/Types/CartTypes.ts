import { ProductsDetails } from "./ProductsDetails";

export interface CartItem {
    product: ProductDetails;
    quantity: number;
    selectedColor: string;
    selectedSize: string;
  }
  
  export interface CartContextType {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: string, color: string, size: string) => void;
    updateQuantity: (productId: string, color: string, size: string, quantity: number) => void;
    getTotalItems: () => number;
    clearCart: () => void;
  }