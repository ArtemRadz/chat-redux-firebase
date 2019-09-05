import React from 'react';

import Button from '../Button/Button';

import './Auth.css';

const Auth = ({ signIn }) => (
  <div id="sign-in">
    <Button onClick={signIn}>Sign In</Button>
  </div>
);

export default Auth;
