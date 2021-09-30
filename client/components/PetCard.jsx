import React, { useState } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import Meal from './Meal';
import Walk from './Walk';

//state includes array: meals = []
//on 'feed' button click: 
//send post request to /meal/:name 
//create a 'meal' component and push to meals array
//render {meals} in todaysInfo div


const PetCard = ({ name, id }) => {
  const [meals, setMeals] = useState([]);
  const [walks, setWalks] = useState([]);

  const addMeal = (e => {
    fetch(`log/meal/${name}?id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(res => res.json())
      .then(data => setMeals(meals.concat(data)))
      // .catch(err => 'Add meal request ERROR: ', err); --err not defined??
  });

  const addWalk = (e => {
    fetch(`log/walk/${name}?id=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(res => res.json())
      .then(data => setWalks(walks.concat(data)))
      // .catch(err => 'Add walk request ERROR: ', err);
  });

  const mealElems = meals.map(
    (meal, i) => {
      return(
        <Meal
          key={i}
          time={meal.meals.first.time}
        />
      )
    }
  )

  const walkElems = walks.map(
    (walk, i) => {
      return(
        <Walk
          key={i}
          time={walk.walks.first.time}
        />
      )
    }
  )

  return (
    <div className="petCard">
      <div className="petHeadContainer">
        <Link to={{pathname: `/pet-profile/${name}`}}>
          <h3 className="petName">{name}</h3>
        </Link>
      </div>
      <div className="careButtons">
        <button onClick={addMeal}>Feed</button>
        <button onClick={addWalk}>Walk</button>
      </div>

      <div className="todaysInfo">
        <div className="infoDiv">
        {mealElems}
        </div>
        <div className="infoDiv">
          {walkElems}
        </div>
      </div>
    </div>
  )
}

export default PetCard;
