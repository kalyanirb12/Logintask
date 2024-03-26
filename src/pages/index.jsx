import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post('https://dummyjson.com/auth/login', {
        username: username,
        password: password,
      })
      .then((result) => {
        console.log('Authentication successful', result);
        if (result.status === 200) {
          // Redirect to dashboard if authentication is successful
          history.replace('/dashboard');
          console.log('Redirecting to dashboard');
        } else {
          setError('Invalid username or password');
          console.error('Unexpected response status:', result.status);
        }
      })
      .catch((error) => {
        setError('Authentication error');
        console.error('Authentication error:', error);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-lg-5">
          <img
            src="https://s3-alpha-sig.figma.com/img/e936/4831/758c69683543f0db53e43b86c121cd3c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ScDCydA0owc4tBUBocT7OpydG~Bezv8iLXAxAqKLBc~81EkDP5ZHBwU29tUI7LUqdvnZvyEr2qi-c-fauW5E6ZXo6xx2g2Pp6uqIKTbDxJQlqgAeT0HwPomHmKY3acZpWjqp4fXpLAPWx7zvk0Bs0gS6TIQ~C8jtUIaHmykWwXRkkOUOFT8~BKnmbv1~iDGdFdNEynEDaHai5K4h9cTSa6pfbz-uiD5kJaCpws3Dvs9RRhTHBgSROGPLjuDfS0LT6E9X8F2QXbiV9MWAnuy3PyYMAkRB4Jkj6XzX7u5~qRxl4gwMPs-re~fy4-9aEwpNuo2Y4A010hW1GpCm3UBCmw__"
            alt="display"
            className="img-fluid"
          />
        </div>
        <div className="col-lg-3">
          <form className="py-4 px-3">
            <h3 className="login-title py-2 mb-4">Login</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <h4 className="login-baseline">Login to your account in seconds</h4>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                onChange={handleUsername}
                required
              />
              <label htmlFor="username">Username</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={handlePassword}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="keepSignedIn" />
                  <label className="form-check-label" htmlFor="keepSignedIn">Keep me signed in</label>
                </div>
              </div>
              <div className="col-md-6 text-md-end">
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" onClick={handleApi} className="btn btn-primary py-3 px-5">Login</button>
            </div>

            <div className="text-center mt-3">
              <p>Don't have an account? <a href="#" className="signup">Sign up</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
