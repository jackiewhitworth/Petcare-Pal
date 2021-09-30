import React, { useState } from 'react';

const Walk = ({ time }) => {
  // const [info, setInfo] = useState[{}];
  return (
    <div className="log-div">
      <h4>Walked today at {time}</h4>
    </div>
  )
}

export default Walk;