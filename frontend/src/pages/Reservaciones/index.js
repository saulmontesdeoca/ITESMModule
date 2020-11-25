import React from 'react';
import Layout from '../../components/Layout';

import TablaReservaciones from '../../components/TablaReservaciones';

import { useContext } from 'react';
import { AuthContext } from "../../components/Auth";

const Reservaciones = (props) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Layout>
            <TablaReservaciones currentUserId={currentUser.uid} />
        </Layout>
    );
};

export default Reservaciones;