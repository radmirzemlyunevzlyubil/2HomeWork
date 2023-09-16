import React, { useState } from 'react';
import './App.css';
import nameIcon from './icons/user-alt-svgrepo-com (1).svg';
import emailIcon from './icons/email-svgrepo-com (1).png';
import passwordIcon from './icons/lock-svgrepo-com (1).png';

function Registration() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [isAlertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
    }, 4000);
  };

  const submit = (e) => {
    e.preventDefault();
    const { name, email, password } = registerData;

    if (name && email && password) {
      showAlert('Registration completed successfully!');
    } else if (e.nativeEvent.submitter.getAttribute('name') === 'signupButton') {
      showAlert('Fill in all the fields.');
    }
  };

  const change = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <div>
        <h2 className='sign-up'>Sign Up</h2>
        <p className='line'></p>
      </div>
      <div>
        <form onSubmit={submit}>
        <div className='name'>
  <img className='nameIcon' src={nameIcon} alt="nameIcon" />
  <input
    className='input-name'
    type="text"
    placeholder='Name'
    name="name"
    value={registerData.name}
    onChange={change}
  />
</div>
<div className='email'>
  <img className='emailIcon' src={emailIcon} alt="emailIcon" />
  <input
    className='input-email'
    type="text"
    placeholder='Email'
    name="email"
    value={registerData.email}
    onChange={change}
  />
</div>
<div className='password'>
  <img className='passwordIcon' src={passwordIcon} alt="passwordIcon" />
  <input
    className='input-password'
    type="password"
    placeholder='Password'
    name="password"
    value={registerData.password}
    onChange={change}
  />
</div>

<p className='helpLink'>Lost Password? <span className='clickHere'>Click Here!</span></p>

<button type="submit" name='signupButton'>Sign Up</button>
<button type='submit' name='loginButton'> Login</button>
        </form>
      </div>
      {isAlertVisible && (
        <div className="custom-alert">
          <div className="custom-alert-content">
            <p>{alertMessage}</p>
            <button onClick={() => setAlertVisible(false)}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Registration;
