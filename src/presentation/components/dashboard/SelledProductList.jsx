import React, { useEffect, useState } from 'react';
import { sellByProduct } from '../../../infraestructure/api/orders';
import * as XLSX from 'xlsx';
import "./selledproductlist.css";

function SelledProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await sellByProduct();
            setProducts(fetchedProducts);
        };
    
        fetchProducts();
    }, []);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(products.map(product => ({
            ProductName: product.productName,
            TotalUnitsSold: product.totalUnits,
            TotalSales: product.totalSales.toFixed(2)
        })));
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Product Sales");
        XLSX.writeFile(wb, "product_sales_report.xlsx");
    };

    return (
        <div className='selled-products-list-container'>
            <h1>Lista de Productos Vendidos</h1>
            <button className="export-btn" onClick={exportToExcel}>Exportar a Excel</button>
            <div className="selled-products-table-wrapper">
                <table className="selled-products-table">
                    <thead>
                        <tr>
                            <th>Nombre del Producto</th>
                            <th>Unidades Vendidas</th>
                            <th>Total de Ventas ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.productName}>
                                <td>{product.productName}</td>
                                <td>{product.totalUnits}</td>
                                <td>${product.totalSales.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SelledProductsList;
