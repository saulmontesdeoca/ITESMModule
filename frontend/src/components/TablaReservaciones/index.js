import React from 'react';
import { db } from '../../pages/Login';
import Table from '../Table';

class TablaReservaciones extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            reservations: []
        }

    }
    async componentDidMount(){
        db.collection("bookings").get()
        .then( querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ reservations: data });
        })
        .catch( error => {
            console.log("Error getting documents: " + error);
        });
    }

    render() {
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
                                <Table data={this.state.reservations}/>
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
    }
}

export default TablaReservaciones;