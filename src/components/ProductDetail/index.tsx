import { useState } from "react";
import UseFetch from "../../Hooks/UseFetch";
import { FaCheck } from "react-icons/fa6";
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";
import { useCart } from "../../Context/CartContext";
import { ProductsDetails } from '../../Types/ProductsDetails';
interface ProductDetailProps {
  IdProduct?: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ IdProduct }) => {
  
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [amount, setAmount] = useState(1);
  
  const colors = [
    { name: "Brown", colorCode: "bg-[#5C4B3C]" },
    { name: "Green", colorCode: "bg-[#2F4F4F]" },
    { name: "Navy", colorCode: "bg-[#2F3E6D]" },
  ];

  const sizeOptions = ["XX-Small", "X-Small", "Small", "Medium", "Large", "2XL", "3XL", "4XL"];

  const handleAddToCart = () => {
    if (!data || !selectedSize) return;

    const cartItem = {
      product: data,
      quantity: amount,
      selectedColor: colors[selectedColor].name,
      selectedSize: selectedSize,
    };

    addToCart(cartItem);
  };

  const { data, loading, error } = UseFetch<ProductsDetails>(`products/${IdProduct}`);
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No se encontraron productos.</div>;
  return (
    <main className="flex w-full p-9" >
      <div className="w-1/2 black flex">
        <div className="MoreImg w-[20%] p-2 grid grid-rows-4 gap-2">
          {data.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${data.title} Image ${index + 1}`} onClick={()=>{setSelectedImage(image)}} className="cursor-pointer rounded-lg object-cover w-full h-full" />
          ))}
        </div>
        <div className="w-[80%] p-2">
          <img
            className="imgMain  rounded-lg object-cover w-full h-full"
            key={0}
            src={selectedImage || data.images[0]}
            alt={`Product ${data.title} Main Image`}
          />
        </div>
      </div>
      <section className="w-1/2 ml-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-integral-cf-extra-bold text-3xl">{data.title}</h1>
          <p className="font-satoshi-bold text-3xl ">${data.price}</p>
          <p className="font-satoshi-light text-justify ">{data.description}</p>
        </div>

        <div className="flex flex-col gap-2 mt-2  border-y-2 border-gray-20 rounded-sm py-2" >
          <p className="font-satoshi-light">Select Color</p>
          <div className="flex gap-2 mb-2">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-10 h-10 rounded-full ${color.colorCode}`}
                onClick={() => setSelectedColor(index)}
              >
                {selectedColor === index && (
                  <span className="flex items-center justify-center text-white font-bold text-lg">
                    <FaCheck />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="border-b-2 border-gray-200 py-2">
          <p className="font-satoshi-light">Choose Size</p>
          <div className="grid grid-cols-4  gap-2 py-2">
            {sizeOptions.map((size) => (
              <button
                key={size}
                className={`p-3 rounded-3xl font-satoshi-light text-xs   ${
                  selectedSize === size ? " bg-black text-white" : "bg-gray-200 text-black"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="w-full flex gap-5 justify-center items-center py-2">
            <div className="bg-gray-200 w-[30%] flex justify-between items-center content-center p-4 rounded-3xl">
                <button onClick={()=>setAmount(amount+1)}>
                < TiPlus />
                </button>
                <p className="text-xl text-black">{amount}</p>
                <button onClick={() => setAmount(amount - 1)} disabled={amount <= 1}  className={amount <= 1 ? "opacity-50 cursor-not-allowed" : ""}>
              <FaMinus/>
              </button>
            </div>

            <div className="w-[70%]">
              <button className="w-full text-white bg-black p-4 rounded-full"  onClick={handleAddToCart}
            disabled={!selectedSize}> Add to Cart</button>
            </div>
        </div>
      
      </section>
    </main>
  );
};

export default ProductDetail;
