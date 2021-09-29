import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


const PetCard = ({ name }) => {
  return (
    <article className="petCard">
      <div className="petHeadContainer">
        <Link to={{pathname: `/pet-profile/${name}`}}>
          <h3 className="petName">Name: {name}</h3>
        </Link>
      </div>
      <div className="careButtons">
        <Link to={'/feed'}>
        <button>Feed</button> </Link>
        <Link to={'/walk'}>
        <button>Walk</button>
        </Link>
      </div>
    </article>
  )
}

export default PetCard;
