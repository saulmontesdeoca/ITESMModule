import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Reservaciones from "../../pages/Reservaciones";
import { AuthProvider } from "../Auth";


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/home' exact component={Home}/>
          <Route path='/reservaciones' exact component={Reservaciones}/>
        </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
