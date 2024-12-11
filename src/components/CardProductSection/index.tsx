import { Link } from "react-router-dom";
import { Product1 } from '../../Types/products';

const CardProductSection = ({ id, title, price, images }: Product1) => {
    return (
        <section className="w-full">
            <div className="rounded-lg shadow-xl overflow-hidden">
                <Link to={`products/${id}`}>
                    <img
                        src={images[0]} 
                        alt={title}
                        className="w-full h-auto object-contain" 
                    />
                </Link>
            </div>
            <h3 className="font-satoshi-bold text-justify text-xl my-7">{title}</h3>
            <div className="ProductData">
                <p className="font-satoshi-black text-2xl ">${price}</p>
            </div>
        </section>
    );
};

export default CardProductSection;