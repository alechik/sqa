import React from 'react';
import './navbar.css'; // Asegúrate de tener este archivo CSS en la ruta correcta

export default function Search() {
    return (
        <section className="search">
            <div className="search-box">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Busque el producto que desea..." />
            </div>
        </section>
    );
}
