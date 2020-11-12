import React from 'react';
import {Link} from 'react-router-dom';
import { FcHome, FcPlanner } from "react-icons/fc";

function Sidebar(props) {
    return (
        <div className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0">
                <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/">
                    <div className="sidebar-brand-text mx-3"><span>ITESM CSF</span></div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <ul className="nav navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><Link className="nav-link active" to="/home"><FcHome/> Book </Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/reservaciones"><FcPlanner/>  My classroom reservations</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;