import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Pets from './components/Pets.jsx';
import AddPet from './components/AddPet.jsx';


class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      // <div className="router">
        <main>
            <Pets />

            {/* <Route
              exact
              path="/add-pet"
              component={AddPet}
            /> */}
        </main>
      // </div>
    );
  };
}

export default App;
