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
        <div>
        <h1>{data.title}</h1>
        <p>Price: ${data.price}</p>
        <p>Category: {data.category.name}</p>
        <p>Description: {data.description}</p>
        <img key={0} src={data.images[0]}  alt={`Product ${data.title} Main Image`} />
        <div>
            <h3>Images:</h3>
            {data.images.slice(1).map((image, index) => (
                <img
                    key={index + 1} 
                    src={image}
                    alt={`Product ${data.title} Image ${index + 2}`} // Para que la numeración comience desde 2
                />
            ))}
        </div>
    </div>
    )
 };

 export default ProductDetail;