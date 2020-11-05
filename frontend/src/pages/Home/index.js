import React from 'react';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Dashboard from '../../components/Dashboard';

function Home(props) {
    return (
        <div id="wrapper">
            <Sidebar/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                    <div className="container-fluid p-0">
                        <Navbar />
                        <Dashboard />
                    </div>

                </div>
            </div>
                </div>
    );
}

export default Home;