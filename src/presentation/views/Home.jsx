import './home.css'
import Carousel from "../components/Carousel.jsx";
import FlashDeals from "../components/ofertas/FlashDeals.jsx";
// eslint-disable-next-line react/prop-types
export default function Home({productItems, productos}) {

    return <div className='container'>
        <Carousel/>
        <FlashDeals productItems={productItems} productos={productos} titulo="recien añadidos"/>
        <FlashDeals productItems={productItems} productos={productos} titulo="Mas puntuado"/>
        <FlashDeals productItems={productItems} productos={productos} titulo="Mas vendidos"/>
    </div>
}
