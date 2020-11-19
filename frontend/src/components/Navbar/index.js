import React from 'react';
import logoTec from '../../assets/img/logo.png';
import {firebaseApp} from '../../pages/Login'
const user = firebaseApp.auth().currentUser;


const Navbar = (props) => {
      return (
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div className="container">
                    <ul className="nav navbar-nav flex-nowrap ml-auto">
                        <li style={{marginRight: '450px', paddingTop: '20px'}}>
                            <img src={logoTec} style={{height: '40px'}} alt="Tec"/>
                        </li>
                        <li className="nav-item dropdown no-arrow">
                            <div className="nav-item dropdown no-arrow pt-2">
                                <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="/">
                                    <span className="d-none d-lg-inline mr-2 text-gray-600 small">{user.displayName}</span>
                                    <img className="border rounded-circle img-profile" src={user.photoURL} alt="img"/>
                                </a>
                                <div
                                    className="dropdown-menu shadow dropdown-menu-right animated--grow-in">
                                        <a className="dropdown-item" href="/"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Settings</a>
                                        <a className="dropdown-item" href="/"><i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Activity log</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;
