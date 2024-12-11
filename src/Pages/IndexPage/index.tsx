import Header from "../../components/Header";
import CardInfo from '../../components/CardInfo/index.tsx'
import TeamMembers from '../../components/TeamMembers/index.tsx'
import CardProductL from '../../LogicalComponents/CardProductL'
import Footer from '../../components/Footer/index.tsx'


const IndexPage =()=>{
    return(
        <>
        <Header/>
        <CardInfo/>
        <TeamMembers/>
        <CardProductL titleSection='NEW ARRIVALS' startProduct="6"/>
        <CardProductL titleSection='TOP SELLING' startProduct="5"/> 
        <Footer/>
       </>
    );
};

export default IndexPage;