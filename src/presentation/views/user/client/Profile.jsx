import React from "react";
import './user.css'
import UserProfile from "./UserProfile.jsx";
import Ordenes from "../../../components/historial/Ordenes.jsx";
export default function Profile(){
    return (
        <>
        <UserProfile/>
        <Ordenes/>
        </>
    )
}

