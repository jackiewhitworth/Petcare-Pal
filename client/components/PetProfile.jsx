import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const PetProfile = ({ breed, age, weight }) => {
  const { name } = useParams();
  const [ pet, setPet ] = useState({});

  useEffect(() => {
    fetch(`/api/pet-profile/${name}`)
      .then(res => res.json())
      .then(data => setPet(data))
  }, [ breed, age, weight ])

  const deletePet = ((e) => {
    fetch(`/api/delete-pet/${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application.json',
      }
    })
    .catch(err => console.log('Delete pet request ERROR: ', err));
  });

  return (
    <article className="petCard">
      <div className="petHeadContainer">
        <h3 className="petName">{name}</h3>
      </div>
      <ul className="petInfo">
        <li className="petDetail">Breed: {pet.breed}</li>
        <li className="petDetail">Age: {pet.age}</li>
        <li className="petDetail">Weight: {pet.weight} pounds</li>
      </ul>
      <div className="careInfo">
        Detailed care info here
      </div>
      <Link to="/">
      <button type="button" onClick={deletePet}>Delete Pet</button>
      </Link>
    </article>
  )
}

export default PetProfile;