
import { useCart } from '../../Context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";

const ShoppingCart = () => {
  const { items, removeFromCart, updateQuantity, getTotalItems } = useCart();

  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    return calculateSubtotal() < 100 ? 10 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-integral-cf-extra-bold text-2xl mb-4">Your cart is empty</h2>
          <p className="font-satoshi-light">Add some products to your cart to see them here!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-extrabold text-3xl mb-8">Shopping Cart {getTotalItems()} items)</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Lista de productos */}
        <div className="lg:w-2/3">
          {items.map((item) => (
            <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`} 
                 className="flex flex-col md:flex-row items-center gap-4 p-4 mb-4 bg-white rounded-lg shadow">
              <img 
                src={item.product.images[0]} 
                alt={item.product.title}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-grow">
                <h3 className="font-integral-cf-extra-bold text-lg">{item.product.title}</h3>
                <p className="font-satoshi-light text-gray-600">
                  Color: {item.selectedColor} | Size: {item.selectedSize}
                </p>
                <p className="font-satoshi-bold">${item.product.price}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-200 flex items-center rounded-3xl px-4 py-2">
                  <button 
                    onClick={() => updateQuantity(
                      item.product.id, 
                      item.selectedColor, 
                      item.selectedSize, 
                      item.quantity - 1
                    )}
                    disabled={item.quantity <= 1}
                    className={`p-1 ${item.quantity <= 1 ? 'opacity-50' : ''}`}
                  >
                    <FaMinus size={14} />
                  </button>
                  <span className="mx-4 font-satoshi-medium">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(
                      item.product.id, 
                      item.selectedColor, 
                      item.selectedSize, 
                      item.quantity + 1
                    )}
                    className="p-1"
                  >
                    <TiPlus size={16} />
                  </button>
                </div>

                <button 
                  onClick={() => removeFromCart(
                    item.product.id, 
                    item.selectedColor, 
                    item.selectedSize
                  )}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen del pedido */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-integral-cf-extra-bold text-xl mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between font-satoshi-light">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between font-satoshi-light">
                <span>Shipping</span>
                <span>${calculateShipping().toFixed(2)}</span>
              </div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-extrabold text-lg">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-full mt-6 font-satoshi-bold hover:bg-gray-800 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;