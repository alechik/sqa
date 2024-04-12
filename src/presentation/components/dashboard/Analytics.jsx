import './analiticas.css'
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
export default function Analytics(){
    const data = [
        {
            "name": "Page A",
            "ganancias": 4000,
            "productos": 2400
        },
        {
            "name": "Page B",
            "ganancias": 3000,
            "productos": 1398
        },
        {
            "name": "Page C",
            "ganancias": 2000,
            "productos": 9800
        },
        {
            "name": "Page D",
            "ganancias": 2780,
            "productos": 3908
        },
        {
            "name": "Page E",
            "ganancias": 1890,
            "productos": 4800
        },
        {
            "name": "Page F",
            "ganancias": 2390,
            "productos": 3800
        },
        {
            "name": "Page G",
            "ganancias": 3490,
            "productos": 4300
        }
    ]

    return <div className='analytics'>
        <header>
            <span className='followers'>Productos vendidos:</span>
            <span className='earnings'>Ganancias:</span>
        </header>
        <BarChart classname='chart' width={240} height={210} data={data}>
            <CartesianGrid strokeDasharray="10 10" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend  width={115}/>
            <Bar dataKey="productos" fill="#00464e" />
            <Bar dataKey="ganancias" fill="#810551" />
        </BarChart>
    </div>
}
