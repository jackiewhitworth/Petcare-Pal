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
    <div className="form">
      <div id="signup">
        <h1>Sign Up</h1>
        <form>

          <div className="field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" value={firstname} onChange={firstnameOnChange} required/>
          </div>

          <div className="field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" value={lastname} onChange={lastnameOnChange}required/>
          </div>

          <div className="field">
            <label htmlFor="username">Create A Username</label>
            <input type="text" name="username" value={username} onChange={usernameOnChange} required/>
          </div>

          <div className="field">
            <label htmlFor="password">Set A Password</label>
            <input type="password" name="password" value={password} onChange={passwordOnChange} required/>
          </div>

          <Link to="/" className="backLink">
            <button type="button" onClick={saveUser}>Create An Account</button>
          </Link>


        </form>
      </div>

    </div>
  )
}

export default SignUp;