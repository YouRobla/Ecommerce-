import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer =()=>{
    return(
        <footer className="w-full mt-32 relative  ">
            <section className="absolute -top-24 left-1/2 transform -translate-x-1/2  w-full px-20 ">
                    <FooterTop />
            </section>
            <section className="">
                <FooterBottom/>
            </section>
       
        </footer>
    );
}
export default Footer;