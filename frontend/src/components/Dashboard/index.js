import React from 'react';

const Dashboard = () => {
    return (
            <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Dashboard</h3>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-left-primary py-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col mr-2">
                                        <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Earnings (monthly)</span></div>
                                        <div className="text-dark font-weight-bold h5 mb-0"><span>$40,000</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-calendar fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-left-success py-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col mr-2">
                                        <div className="text-uppercase text-success font-weight-bold text-xs mb-1"><span>Earnings (annual)</span></div>
                                        <div className="text-dark font-weight-bold h5 mb-0"><span>$215,000</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-left-info py-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col mr-2">
                                        <div className="text-uppercase text-info font-weight-bold text-xs mb-1"><span>Tasks</span></div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="text-dark font-weight-bold h5 mb-0 mr-3"><span>50%</span></div>
                                            </div>
                                            <div className="col">
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar bg-info" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}><span className="sr-only">50%</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-left-warning py-2">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col mr-2">
                                        <div className="text-uppercase text-warning font-weight-bold text-xs mb-1"><span>Pending Requests</span></div>
                                        <div className="text-dark font-weight-bold h5 mb-0"><span>18</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-comments fa-2x text-gray-300"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="text-primary font-weight-bold m-0">Departamentos</h6>
                            </div>
                            <div className="card-body">
                                <h4 className="small font-weight-bold">Ingenierías<span className="float-right">20%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}><span className="sr-only">20%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Negocios<span className="float-right">40%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}><span className="sr-only">40%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Salud<span className="float-right">60%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}><span className="sr-only">60%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Estudios Creativos<span className="float-right">80%</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}><span className="sr-only">80%</span></div>
                                </div>
                                <h4 className="small font-weight-bold">Ciencias Sociales<span className="float-right">Complete!</span></h4>
                                <div className="progress mb-4">
                                    <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}><span className="sr-only">100%</span></div>
                                </div>
                            </div>
                        </div>            
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-lg-6 mb-4">
                                <div className="card text-white bg-primary shadow">
                                    <div className="card-body">
                                        <p className="m-0">Primary</p>
                                        <p className="text-white-50 small m-0">#4e73df</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card text-white bg-success shadow">
                                    <div className="card-body">
                                        <p className="m-0">Success</p>
                                        <p className="text-white-50 small m-0">#1cc88a</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card text-white bg-info shadow">
                                    <div className="card-body">
                                        <p className="m-0">Info</p>
                                        <p className="text-white-50 small m-0">#36b9cc</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card text-white bg-warning shadow">
                                    <div className="card-body">
                                        <p className="m-0">Warning</p>
                                        <p className="text-white-50 small m-0">#f6c23e</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card text-white bg-danger shadow">
                                    <div className="card-body">
                                        <p className="m-0">Danger</p>
                                        <p className="text-white-50 small m-0">#e74a3b</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <div className="card text-white bg-secondary shadow">
                                    <div className="card-body">
                                        <p className="m-0">Secondary</p>
                                        <p className="text-white-50 small m-0">#858796</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Dashboard;