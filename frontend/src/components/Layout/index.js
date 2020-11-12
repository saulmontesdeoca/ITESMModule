import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
const Layout = (props) => {
    return (
        <div id="wrapper">
            <Sidebar/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid p-0">
                        <Navbar />
                        {props.children}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Layout;