import CALVIN from '../../assets/ImgProyect/Members/CALVIN.png'
import GUCII from '../../assets/ImgProyect/Members/GUCCI.png'
import PRADA from '../../assets/ImgProyect/Members/PRADA.png'
import VERSACE from '../../assets/ImgProyect/Members/VERSACE.png'
import ZARA from '../../assets/ImgProyect/Members/ZARA.png'



const TeamMembers = ()=>{
    return (
        <section className='bg-black p-5 flex flex-wrap justify-evenly items-center gap-4'>
            <img src={VERSACE} alt='VERSACE' className="max-w-xs"/>
            <img src={ZARA} alt='ZARA' className="max-w-xs"/>
            <img src={GUCII} alt='GUCCI' className="max-w-xs"/>
            <img src={PRADA} alt='PRADA' className="max-w-xs"/>
            <img src={CALVIN} alt='CALVIN' className="max-w-xs"/>
        </section>
    );
}
export default TeamMembers