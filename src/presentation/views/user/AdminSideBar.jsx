import React, {Component} from 'react';
import './admin.css'
import Sidebar from "./Sidebar.jsx";
import {useParams} from "react-router-dom";
import CrudProductos from "./CrudProductos.jsx";

export default function AdminSideBar() {
    const {activepage} = useParams()

        return (
            <div>
                <div className="admin-sidebar">
                    <div className="left">
                        <Sidebar activepage={activepage}/>
                    </div>
                    <div className="right">
                        {activepage === 'crud-productos' && <CrudProductos/> }
                    </div>
                </div>
            </div>
        );

}

