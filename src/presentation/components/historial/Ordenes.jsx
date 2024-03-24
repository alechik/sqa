import React from 'react'
import './ordenes.css'
export default function Ordenes(){
    const data = [
        {
            id: 112345,
            date : '12/12/2021',
            status: 'Entregado',
            total: 1000
        },{
            id: 112346,
            date: '12/12/2021',
            status: 'En camino',
            total: 1600
        },{
            id: 112347,
            date: '12/12/2021',
            status: 'Entregado',
            total: 2000
        },
        {
            id: 112348,
            date: '12/12/2021',
            status: 'Cancelado',
            total: 100
        }
    ]

    return (
        <div className='tusordenes'>
            <h1 className="mainhead">Tus Ordenes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nro Orden</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                {data.map((item,index) => {
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>
                                <p>
                                    {item.status}
                                </p>
                            </td>
                            <td>{item.total}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}