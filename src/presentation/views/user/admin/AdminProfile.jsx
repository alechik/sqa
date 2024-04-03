import React from 'react'
import AdminInfo from "./AdminInfo.jsx";
import AdminSideBar from "./AdminSideBar.jsx";
import {useParams} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AdminProfile({productos}){

    return <>
    
        <AdminSideBar productos={productos} />
    </>
}