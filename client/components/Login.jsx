import React, { Component, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const useInput = init => {
  const [ value, setValue ] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  }

  return [ value, onChange ];
}


const Login = () => {
  const [username, usernameOnChange] = useInput('');
  const [password, passwordOnChange] = useInput('');

  const validateUser = () => {
    const body = { username, password };
    fetch('/user/login', {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .catch(err => console.log('AddPet fetch /user/login: ERROR: ', err));
  }

  return (
    <div className="form">
      <div id="signup">
        <h1>Login</h1>
        <form>

          <div className="field">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={username} onChange={usernameOnChange} required/>
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={passwordOnChange} required/>
          </div>

          {/* <Link to="/" className="backLink"> */}
            <button type="button" onClick={validateUser}>Login</button>
          {/* </Link> */}

        </form>
      </div>

    </div>
  )
}

export default Login;