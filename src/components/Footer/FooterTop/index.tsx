import Buttom from "../../Buttom";
const FooterTop = () =>{
    return(
       <div className="bg-black text-white w-full h-32 items-center justify-between flex rounded-2xl  py-24 px-20">
            <h3 className="font-integral-cf-extra-bold text-4xl">
            STAY UPTO DATE ABOUT <br />OUR LATEST OFFERS
            </h3>
            <div>
                <input type="email"  className=" outline-none mb-2 w-full rounded-2xl p-3 text-center text-black" placeholder="Enter your email address"/>
                <Buttom  nameButtom="Subscribe to Newsletter" backgroundColor="bg-white" textColor="text-black"/> 
            </div>
       </div>
    );
}

export default FooterTop;