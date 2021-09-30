import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  }

  return [ value, onChange ];
}


const AddPet = props => {
  const [ name, nameOnChange ] = useInput('');
  const [ breed, breedOnChange ] = useInput('');
  const [ age, ageOnChange ] = useInput('');
  const [ weight, weightOnChange ] = useInput('');

  const [ nameError, setNameError ] = useState(null);
  const [ breedError, setBreedError ] = useState(null);

  const savePet = () => {
    //check if name and breed are empty
    if (name === '') {
      setNameError('required');
    } else if (breed === '') {
      setBreedError('required');
    } else {

      const body = { name, breed, age, weight };
      fetch('/api/add-pet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(() => props.history.push('/'))
        .catch(err => console.log('AddPet fetch /api new pet: ERROR: ', err));
    }
  }

  // clear nameError  and breedError when changed
  useEffect(() => {
    setNameError(null);
  }, [name]);

  useEffect(() => {
    setBreedError(null);
  }, [breed]);

  return (
    <section className="mainSection addPetContainer">
      <header className="sectionHeader">
        <h2>Add a Pet</h2>
        <Link to="/" className="backLink">
          <button>Back to pets</button>
        </Link>
      </header>
      <div className="addPetDiv">
        <h3>Enter your pet's information:</h3>
        <div className="addPetFields">
          <input name="name" placeholder="Pet's Name" value={name} onChange={nameOnChange} />
          {nameError ? (<span className="errorMsg">{nameError}</span>) : null}
        </div>
        <div className="addPetFields">
          <input name="breed" placeholder="breed" value={breed} onChange={breedOnChange}/>
        </div>
        <div className="addPetFields">
          <input name="age" placeholder="age (years)" value={age} onChange={ageOnChange} />
        </div>
        <div className="addPetFields">
          <input name="weight" placeholder="weight (pounds)" value={weight} onChange={weightOnChange}/>
        </div>
        <div className="addPetButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" onClick={savePet}>Save</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default withRouter(AddPet);

