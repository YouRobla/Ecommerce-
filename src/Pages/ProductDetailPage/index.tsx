import { useParams } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductDetail from "../../components/ProductDetail";
import { useEffect } from "react";


const ProductDetailPage = () =>{
  const {Id} =useParams<{ Id: string }>()

  useEffect(() => {
    window.scrollTo(0, 10); 
  }, []);
    return(
        <>
            <Header/>
            <ProductDetail IdProduct={Id}/>
            <Footer/>
        </>
           
    );
};

export default ProductDetailPage;