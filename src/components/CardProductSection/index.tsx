


interface Product1{
    id:number;
    title:string;
    price:number,
    category:string;
    description:string;
    image:string;
  
  }
  
  

  const CardProductSection = ({title, price, image,id}: Product1) => {
    return (
        <section className="w-full h-full">
            {/* Contenedor con fondo color #F0EEED */}
            <div className="w-full h-60  rounded-lg p-2  shadow-xl ">
                <a href={`products/${id}`}>
                <img 
                    src={image} 
                    alt={'Producto'} 
                    className="w-full h-full object-contain" 
                />
                </a>
            </div>
            <h3 className="font-satoshi-bold text-justify text-xl my-7 h-10">{title}</h3>
            <div className="ProductData">
                <p className="font-satoshi-black text-2xl ">${price}</p>
            </div>
        </section>
    );
};

export default CardProductSection;