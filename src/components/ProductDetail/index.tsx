import UseFetch from "../../Hooks/UseFetch";
import { Product1 } from "../../Types/products";
interface ProductDetailProps {
    IdProduct?: string;
}


 const ProductDetail: React.FC<ProductDetailProps> = ({IdProduct})=>{
   
    console.log(IdProduct,'Este es el Id por sesccioon');
    const { data, loading, error } = UseFetch<Product1>(`products/${IdProduct}`);
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No se encontraron productos.</div>;
    
    
    
    return(
        <main className="flex w-full p-9 ">
            <div className="w-1/2 flex">
                <div className="MoreImg w-[20%] p-2 grid grid-rows-4  ">
                    {data.images.slice(1).map((image, index) => (
                            <img
                                key={index + 1} 
                                src={image}
                                alt={`Product ${data.title} Image ${index + 2}`}
                            />
                        ))}
                </div>
                <div className="w-[80%] p-2 "> 
                <img  className='imgMain w-full' key={0} src={data.images[0]}  alt={`Product ${data.title} Main Image`} />
                    
                </div>
            </div>
            <div className="w-1/2">          
                <h1 className="font-integral-cf-extra-bold text-4xl">{data.title}</h1>
                <p>Price: ${data.price}</p>
                <p>Category: {data.category.name}</p>
                <p>Description: {data.description}</p>
            </div>
                
        </main>
    
    )
 };

 export default ProductDetail;