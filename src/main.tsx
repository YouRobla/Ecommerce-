
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/index.tsx'
import CardInfo from './components/CardInfo/index.tsx'
import TeamMembers from './components/TeamMembers/index.tsx'
import CardProductL from './LogicalComponents/CardProductL'
import Footer from './components/Footer/index.tsx'



createRoot(document.getElementById('root')!).render(
    <>
     <Header/>
     <CardInfo/>
     <TeamMembers/>
     <CardProductL titleSection='NEW ARRIVALS' />
     <CardProductL titleSection='TOP SELLING' /> 
     <Footer/>
    </>
    
 
)
