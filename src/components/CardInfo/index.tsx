import Buttom from "../Buttom";
import MestricsPanel from "./MetricsPanel";
import PersonProyect from '../../assets/ImgProyect/PersonaProyectoRemaster.png'


 const DatosCard=[
    { title: '200+', description: 'International Brands' },
    { title: '2,000+', description: 'High-Quality Products' },
    { title: '30,000+', description: 'Happy Customers' },
 ]



const CardInfo = () => {
    return(
        <section className="bg-gray-100 w-full max-h-auto flex ">
            <div className="w-[50%] pl-[102px] py-[89px]">
                <h1 className="font-integral-cf-extra-bold flex-col text-[63.5px]/none   ">
                    FIND CLOTHES<br/>
                    THAT MATCHES<br/>
                    YOUR STYLE
                </h1>
                <p className="font-satoshi-light my-6 text-justify text-[17px]/2 ">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <div className="ButtonContainer w-[210px] h-12 mb-16">
                    <Buttom nameButtom="Shop Now"/>
                </div> 
                <MestricsPanel datos={DatosCard}/>
            </div>
            <div className="w-1/2 relative">
                <img src={PersonProyect} alt="Logos persona" className="w-auto"/>
                <svg className="absolute top-14 right-20" width="90" height="90" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"/>
                </svg>

                <svg className="absolute top-96 left-1" width="52" height="52" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black"/>
                </svg>

            </div>
        </section>
    );
}

export default CardInfo