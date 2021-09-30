import React, { useState } from 'react';

const Meal = ({ time }) => {
  // const [info, setInfo] = useState[{}];
  return (
    <div className="log-div">
      <h4>Fed today at {time}</h4>
    </div>
  )
}

export default Meal;