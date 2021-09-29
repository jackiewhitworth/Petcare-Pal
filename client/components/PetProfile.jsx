import React from 'react';
import { render } from 'react-dom';


const PetProfile = () => {
  // const name = "Zeyda";
  return (
    <article className="petCard">
      <div className="petHeadContainer">
        <h3 className="petName">{name}</h3>
      </div>
      <ul className="petInfo">
        <li className="petDetail">Breed: {breed}</li>
        <li className="petDetail">Age: {age}</li>
        <li className="petDetail">Weight: {weight} pounds</li>
      </ul>
      <div className="careInfo">
        
      </div>
    </article>
  )
}

export default PetProfile;