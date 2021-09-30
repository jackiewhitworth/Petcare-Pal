import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  }

  return [ value, onChange ];
}



const SignUp = () => {
  const [firstname, firstnameOnChange] = useInput('');
  const [lastname, lastnameOnChange] = useInput('');
  const [username, usernameOnChange] = useInput('');
  const [password, passwordOnChange] = useInput('');


  const saveUser = () => {
    const body = { firstname, lastname, username, password };
    fetch('/user/signup', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(err => console.log('AddPet fetch /signup new user: ERROR: ', err));
  }

  return (
    <div container="mainContainer">
      <div className="card">
        <div className="form">
          <div className="userInfo">
            <h1>Sign Up</h1>
            <form>

              <div className="field">
                <input type="text" placeholder="First Name"name="firstname" value={firstname} onChange={firstnameOnChange} required/>
              </div>

              <div className="field">
                <input type="text" placeholder="Last Name" name="lastname" value={lastname} onChange={lastnameOnChange}required/>
              </div>

              <div className="field">
                <input type="text" placeholder="Create A Username" name="username" value={username} onChange={usernameOnChange} required/>
              </div>

              <div className="field">
                <input type="password" placeholder="Set A Password" name="password" value={password} onChange={passwordOnChange} required/>
              </div>

              <Link to="/" className="backLink">
                <button type="button" onClick={saveUser}>Create An Account</button>
              </Link>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignUp;