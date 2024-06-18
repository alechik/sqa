import React from "react";
import { Link } from "react-router-dom";

import PeopleIcon from "./admin/icons/people-outline.svg";
import Create from "./admin/icons/create-outline.svg";
import Stats from "./admin/icons/stats-chart-outline.svg";
import Admin from "./admin/icons/person-circle-outline.svg";
import Category from "./admin/icons/category.svg";
import AdminInfo from "../user/admin/AdminInfo.jsx";

export default function Sidebar({ activepage }) {
  return (
    <div className='navwrapper'>
      <div className='subnav secondnav'>

        <Link to='/admin/AdminInfo' className={activepage === 'AdminInfo' ? 'navbutton selected' : 'navbutton'}>
          <div className='navicon' style={{ backgroundColor: 'transparent' }}>
            <img src={Admin} alt="Admin" style={{ width: '25px', height: '25px', filter: 'invert(100%)' }} />
          </div>
          <div className='navlabel'>Usuario</div>
        </Link>

        <Link to='/admin/crud-productos' className={activepage === 'crud-productos' ? 'navbutton selected' : 'navbutton'}>
          <div className='navicon' style={{ backgroundColor: 'transparent' }}>
            <img src={Create} alt="Create" style={{ width: '25px', height: '25px', filter: 'invert(100%)' }} />
          </div>
          <div className='navlabel'>Productos</div>
        </Link>

        <Link to='/admin/categoria' className={activepage === 'categoria' ? 'navbutton selected' : 'navbutton'}>
          <div className='navicon' style={{ backgroundColor: 'transparent' }}>
            <img src={Category} alt="Category" style={{ width: '25px', height: '25px', filter: 'invert(100%)' }} />
          </div>
          <div className='navlabel'>Categoria</div>
        </Link>

        <Link to='/admin/dashboard' className={activepage === 'dashboard' ? 'navbutton selected' : 'navbutton'}>
          <div className='navicon' style={{ backgroundColor: 'transparent' }}>
            <img src={Stats} alt="Stats" style={{ width: '25px', height: '25px', filter: 'invert(100%)' }} />
          </div>
          <div className='navlabel'>Dashboard</div>
        </Link>

        <Link to='/admin/crud-empleados' className={activepage === 'crud-empleados' ? 'navbutton selected' : 'navbutton'}>
          <div className='navicon' style={{ backgroundColor: 'transparent' }}>
            <img src={PeopleIcon} alt="People" style={{ width: '25px', height: '25px', filter: 'invert(100%)' }} />
          </div>
          <div className='navlabel'>Ver Empleados</div>
        </Link>

      </div>
    </div>
  );
}