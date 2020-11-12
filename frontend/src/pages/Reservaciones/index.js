import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

const Reservaciones = (props) => {
    return (
        <div id="wrapper">
            <Sidebar/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid p-0">
                        <Navbar />
                        
                        <h1>Reservaciones</h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reservaciones;