import './analiticas.css'
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
export default function Analytics({topProducts}){
    // eslint-disable-next-line react/prop-types
    const data = topProducts.map(product => ({
        name: product.productName,
        cantidadVendida: product.quantitySold
    }));

    return <div className='analytics'>
        <header>
            <span className='followers'>Productos mas vendidos</span>
        </header>
        <BarChart className='chart' width={500} height={210} data={data}>
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend   align='center' width={500} />
            <Bar dataKey="cantidadVendida" fill="#00464e" />
        </BarChart>
    </div>
}
