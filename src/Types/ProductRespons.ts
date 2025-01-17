import  ProductsDetails  from "./ProductsDetails";

interface ProductResponse {
    products: ProductsDetails[];
    total: number;
    skip: number;
    limit: number;
  }

 export default ProductResponse; 