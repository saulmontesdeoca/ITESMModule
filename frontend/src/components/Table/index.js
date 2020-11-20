import React from 'react';

const Table = (props) => {
    return (
        <table className="table">
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
                {props.data ? props.data.map(function(reservation, index) {
                    return  <tr key={index}>
                            <th scope="row">{reservation.classrooms}</th>
                            <td>{reservation.use}</td>
                            <td>{ reservation.date.toDate().toDateString().toString()}</td>
                            <td>{ reservation.initialHour.toDate().getHours().toString()}:{reservation.initialHour.toDate().getMinutes().toString() === '0' ? '00':reservation.initialHour.toDate().getMinutes().toString()}</td>
                            <td>{ reservation.finalHour.toDate().getHours().toString()}:{reservation.finalHour.toDate().getMinutes().toString() === '0' ? '00':reservation.finalHour.toDate().getMinutes().toString()}</td>
                            </tr>
                })
                 : <tr>
                    <th scope="row">No data</th>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    </tr>
                }
            </tbody>
        </table>
    );
};

export default Table;