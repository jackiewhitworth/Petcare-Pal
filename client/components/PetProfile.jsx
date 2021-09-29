import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router';


const PetProfile = ({ breed, age, weight }) => {
  const { name } = useParams();
  const [ pet, setPet ] = useState({});

  useEffect(() => {
    fetch(`/api/pet-profile/${name}`)
      .then(res => res.json())
      .then(data => setPet(data))
  }, [ breed, age, weight ])


  // componentDidMount = () => {
  //   fetch(`/api/pet-profile/${name}`)
  //     .then(res => res.json())
  //     .then(pet => {
  //       console.log(pet)
  //       setPet(pet)
  //     })
  //     .catch(err => console.log('PetProfile componentDidMount get profile ERROR: ', err));
  // }

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
    </article>
  )
}

export default PetProfile;