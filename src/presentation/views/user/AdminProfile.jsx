import React from 'react'
import AdminInfo from "./AdminInfo.jsx";
import AdminSideBar from "./AdminSideBar.jsx";
import {useParams} from "react-router-dom";

export default function AdminProfile(){

    return <>
    <AdminInfo/>
        <AdminSideBar />
    </>
}