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
    <div className="mainContainer">
      <div className="card">
        <div className="form">
          <div className="userInfo">
            <h1>Login</h1>
            <form>

              <div className="field">
                <input type="text" placeholder="username" name="username" value={username} onChange={usernameOnChange} required/>
              </div>

              <div className="field">
                <input type="password" placeholder="password" name="password" value={password} onChange={passwordOnChange} required/>
              </div>

              {/* <Link to="/" className="backLink"> */}
                <button type="button" onClick={validateUser}>Login</button>
              {/* </Link> */}

            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login;