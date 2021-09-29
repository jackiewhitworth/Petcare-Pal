import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';


const PetCard = ({ name }) => {
  return (
    <article className="petCard">
      <div className="petHeadContainer">
        <h3 className="petName">Name: {name}</h3>
      </div>
      <div className="careButtons">
        <Link to={'/feed'}>
        <button className="feedButton">Feed</button> </Link>
        <Link to={'/walk'}>
        <button className="walkButton">Walk</button>
        </Link>
      </div>
    </article>
  )
}

export default PetCard;
