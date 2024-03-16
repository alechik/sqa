import {Outlet} from "react-router-dom";
import './home.css'
import Carousel from "../components/Carousel.jsx";
import FlashCard from "../components/ofertas/FlashCard.jsx";
import FlashDeals from "../components/ofertas/FlashDeals.jsx";
export default function Home({productItems}) {

    return <div className='container'>
        <Carousel/>
        <FlashDeals productItems={productItems}/>
    </div>
}
