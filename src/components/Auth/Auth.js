import React from 'react';

import Button from '../Button/Button';

import './Auth.css';

const Auth = ({ signIn }) => (
  <div id="sign-in">
    <Button title={'Sign In'} handleClick={signIn} />
  </div>
);

export default Auth;
