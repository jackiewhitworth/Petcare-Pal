import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pet from '../../server/models/pet.js';

import PetCard from './PetCard.jsx';

class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(pets => {
        if (!Array.isArray(pets))
        pets = [];
        return this.setState({
          pets
        });
      })
      .catch(err => console.log('Pets.componentDidMount: get pets ERROR: ', err));
  }

  render() {
    const { pets } = this.state;

    if (!pets) return null;

    if(!pets.length) return ( 
      <div className="sectionHeader">
      <h2>Add your first pet!</h2>
      <Link to={'/add-pet'}>
        <button type="button"
          className="addPetButton">
          Add Pet
        </button>
      </Link>
    </div>
    )

    const petElems = pets.map(
      (pet, i) => {
        return (
          <PetCard
            key={i}
            name={pet.name}
            id={pet._id}
          />
        )
      }
    )
    
    return (
      <section className="mainSection">
        <header className="pageHeader">
          <h1>Welcome, user</h1>
          <Link to="/signup">
            <button type="button"
              className="createAccount">
              Create an account
            </button>
          </Link>

          <Link to="/login">
            <button type="button"
              className="createAccount">
             Login
            </button>
          </Link>

        </header>

        <div className="sectionHeader">
          <h2>My Pets</h2>
          <div className="petContainer">
            {petElems}
          </div>

          <div className="addPetButtonWrapper">
            <Link to={'/add-pet'}>
              <button type="button"
                className="addPetButton">
                Add Pet
              </button>
            </Link>
          </div>
        </div>

      </section>
    )
  }
}

export default Pets;