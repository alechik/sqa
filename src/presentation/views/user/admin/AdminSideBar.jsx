import React, {Component} from 'react';
import './admin.css'
import Sidebar from "../Sidebar.jsx";
import {useParams} from "react-router-dom";
import CrudProductos from "./CrudProductos.jsx";
import CrudEmpleados from "./CrudEmpleados.jsx";
import Dashboard from "../Dashboard.jsx";
import AddProductForm from "../../Products/addProductform.jsx";

// eslint-disable-next-line react/prop-types
export default function AdminSideBar({productos}) {
    const {activepage} = useParams()

        return (
            <div>
                <div className="admin-sidebar">
                    <div className="left">
                        <Sidebar activepage={activepage} productos={productos}/>
                    </div>
                    <div className="right">
                        {activepage === 'crud-productos' && <CrudProductos productos={productos} /> }
                        {activepage === 'crud-empleados' && <CrudEmpleados/> }
                        {activepage === 'dashboard' && <Dashboard/> }
                        {activepage === 'add-product' && <AddProductForm/>}
                    </div>
                </div>
            </div>
        );

}

