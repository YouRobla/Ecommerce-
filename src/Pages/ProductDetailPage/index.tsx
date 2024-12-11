import { useParams } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductDetail from "../../components/ProductDetail";


const ProductDetailPage = () =>{
  const {Id} =useParams<{ Id: string }>()
  console.log(Id);
  
    return(
        <main>
            <Header/>
            <ProductDetail IdProduct={Id}/>
            <Footer/>
        </main>
           
    );
};

export default ProductDetailPage;