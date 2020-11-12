import React from 'react';

const TablaReservaciones = () => {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
                <h3 className="text-dark mb-0">Table of reservations</h3>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="text-primary font-weight-bold m-0">Reservations</h6>
                        </div>
                        <div className="card-body" style={{maxHeight: '355px', overflowY: 'auto'}}>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Aula</th>
                                <th scope="col">Uso</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora de inicio</th>
                                <th scope="col">Hora de entrega</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">A3002</th>
                                <td>Matematicas II</td>
                                <td>13 Agosto</td>
                                <td>12:30</td>
                                <td>13:00</td>
                                </tr>
                                <tr>
                                <th scope="row">A2202</th>
                                <td>Física I</td>
                                <td>22 Septiembre</td>
                                <td>20:30</td>
                                <td>22:00</td>
                                </tr>
                                <tr>
                                <th scope="row">A5505</th>
                                <td>Electricidad y Magnetismo</td>
                                <td>24 Diciembre</td>
                                <td>7:00</td>
                                <td>10:00</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                    </div>            
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 mb-4">
                    <div className="card text-white bg-primary shadow">
                        <div className="card-body">
                            <p className="m-0">Past booked classrooms</p>
                            <p className="text-white-50 small m-0">5 classrooms</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="card text-white bg-success shadow">
                        <div className="card-body">
                            <p className="m-0">Booked</p>
                            <p className="text-white-50 small m-0">3 classrooms</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="card text-white bg-warning shadow">
                        <div className="card-body">
                            <p className="m-0">Pending</p>
                            <p className="text-white-50 small m-0">2 classrooms</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 mb-4">
                    <div className="card text-white bg-danger shadow">
                        <div className="card-body">
                            <p className="m-0">Canceled</p>
                            <p className="text-white-50 small m-0">1 classroom</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TablaReservaciones;