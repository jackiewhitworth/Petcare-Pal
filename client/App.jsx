import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Pets from './components/Pets';
import AddPet from './components/AddPet';
import PetProfile from './components/PetProfile';
import SignUp from './components/SignUp';
import Login from './components/Login';


const App = props => {
  return (
    <div className="router">
      <main>
      <Switch>

        <Route 
          exact
          path="/signup"
          component={SignUp}
        /> 

        <Route 
          exact
          path="/login"
          component={Login}
        /> 

        <Route 
          exact
          path="/add-pet"
          component={AddPet}
        />

        <Route
          exact
          path="/pet-profile/:name"
          component={PetProfile}
        />

        <Route 
          exact
          path="/"
          component={Pets}
        />

      </Switch>
      </main>
    </div>
  );
};

export default App;
