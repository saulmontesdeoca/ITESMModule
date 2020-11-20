import React, { useState } from "react";
import { useContext } from 'react';
import { KeyboardDatePicker,   KeyboardTimePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Auth";

import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';

import { db } from '../../pages/Login'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const Dashboard = (props) => {
    const [date, setDate] = useState(new Date());
    const [use, setUse] = useState('');
    const [initialHour, setInitialHour] = useState(new Date());
    const [finalHour, setFinalHour] = useState(new Date());
    const [classroom, setClassroom] = React.useState('');
    const classes = useStyles();
    const { currentUser } = useContext(AuthContext);



    const handleClassroomChange = (event) => {
        setClassroom(event.target.value);
    };
    const handleUse = (event) => {
        setUse(event.target.value);
    };
    const handleDateChange = (date) => {
        setDate(date);
    };
    const handleInitialHourChange = (hour) => {
        setInitialHour(hour);
      };
    const handleFinalHourChange = (hour) => {
        setFinalHour(hour);
    };

    const  handleSubmit = async (event) => {
        event.preventDefault();

        await db.collection('bookings').add({
            userId: currentUser.uid,
            classrooms: classroom,
            use: use,
            date: date,
            initialHour: initialHour,
            finalHour: finalHour,
        })
        .then(docRef => {
            alert("Booked successfully!");
            window.location.href = "reservaciones";
        })
        .catch(error => {
            console.log("Error adding document: " + error);

        });
    }

    if (!currentUser) {
        return <Redirect to="/home" />;
    }

    return (
            <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                    <h3 className="text-dark mb-0">Classroom booking</h3>
                </div>
                <div className="row justify-content-around">
                    <div className="col-lg-8 col-sm-12 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="text-primary font-weight-bold m-0">Book</h6>
                            </div>
                            <div className="card-body" style={{maxHeight: '355px', overflowY: 'auto'}}>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label>Classroom:</label>
                                            <br/>
                                            <div  className={classes.formControl}>
                                                <InputLabel id="demo-simple-select-label">Classroom</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={classroom}
                                                    onChange={handleClassroomChange}
                                                    >
                                                    <MenuItem value='A1001'>A1001</MenuItem>
                                                    <MenuItem value='A2002'>A2002</MenuItem>
                                                    <MenuItem value='A3003'>A3003</MenuItem>
                                                    <MenuItem value='A4004'>A4004</MenuItem>
                                                    <MenuItem value='A5005'>A5005</MenuItem>

                                                </Select>
                                            </div>
                                        </div>
                                        <div className="form-group col">
                                            <label>Use:</label>
                                            <input type="text" value={use} className="form-control mt-2" placeholder="Uso" onChange={handleUse}/>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="form-group col">
                                            <label>Date:</label>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <Grid container justify="space-around">
                                                    <KeyboardDatePicker
                                                        margin="normal"
                                                        id="date-picker-dialog"
                                                        label="Date"
                                                        format="MM/dd/yyyy"
                                                        value={date}
                                                        onChange={handleDateChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change date',
                                                        }}
                                                        />
                                                    </Grid>                                     
                                            </MuiPickersUtilsProvider>
                                        </div>
                                        <div className="form-group col">
                                            <label>Start time:</label>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <Grid container justify="space-around">
                                                    <KeyboardTimePicker
                                                        margin="normal"
                                                        id="time-picker"
                                                        label="Start time"
                                                        minutesStep={5}
                                                        value={initialHour}
                                                        onChange={handleInitialHourChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change time',
                                                        }}
                                                        />
                                                    </Grid>                                     
                                            </MuiPickersUtilsProvider>
                                        </div>
                                        <div className="form-group col">
                                            <label>End time:</label>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <Grid container justify="space-around">
                                                    <KeyboardTimePicker
                                                        margin="normal"
                                                        id="time-picker"
                                                        label="End time"
                                                        minutesStep={5}
                                                        value={finalHour}
                                                        onChange={handleFinalHourChange}
                                                        KeyboardButtonProps={{
                                                            'aria-label': 'change time',
                                                        }}
                                                        />
                                                    </Grid>                                     
                                            </MuiPickersUtilsProvider>                                       
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block mt-3">Book now</button>
                                </form>
                            </div>
                        </div>            
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-lg-8 col-sm-12 mb-4">
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
                </div>
            </div>

    );
};

export default Dashboard;