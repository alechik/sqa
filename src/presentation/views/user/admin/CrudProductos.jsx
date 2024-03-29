import React, {useState} from "react";
import './crudproductos.css'
import {Link} from "react-router-dom";
import {deleteProduct} from "../../../../infraestructure/api/product.js";
import { useNavigate } from 'react-router-dom';

export default function CrudProductos({productos}){
    const [productList, setProductList] = useState(productos); 
    const navigate = useNavigate();


    const handleDeleteProduct = async (productId) => {
        try {
            await deleteProduct(productId);
            // Actualizar la lista de productos eliminando el producto con el ID dado
            setProductList(productList.filter(product => product.id !== productId));
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
            alert('Error al eliminar el producto. Por favor, revisa la consola para más detalles.');
        }
    };

    const handleEditProduct = (productId) => {
        // Navega a la ruta de edición con el ID del producto
        navigate(`/admin/edit-product/${productId}`);
    };


    return <div className='crud-productos'>
        <div className="crud-options">
            <Link to='/admin/add-product'><button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Añadir producto
            </button></Link>
        </div>
        <table>
            <thead>
            <tr>
                <th>ID producto</th>
                <th>Nombre producto</th>
                <th>Descripcion</th>
                <th>Stock</th>
                <th>Acciones</th>
            </tr>
            </thead>

            <tbody>
            {/* eslint-disable-next-line react/prop-types */}
            {productos.map((productos) => {
                return (
                    <tr key={productos.id}>
                        <td>{productos.id}</td>
                        <td>{productos.product_name}</td>
                        <td>
                            <p>
                                {productos.description}
                            </p>
                        </td>
                        <td>{productos.stock}</td>
                        <td id='acciones'>
                            <button id='editar'
                                onClick={() => handleEditProduct(productos.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                            </button>
                            <button id='borrar' onClick={() => handleDeleteProduct(productos.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
}