import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './User.css';

const User = ({ user, signOut }) => {
  const { photoURL, displayName, email } = user;

  return (
    <div id="user">
      <img className="user-img" src={photoURL} alt={`${displayName}`}></img>
      <div className="user-container">
        <p>{displayName}</p>
        <p>{email}</p>
        <Button title={'Sign Out'} handleClick={signOut} />
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string
  }).isRequired,
  signOut: PropTypes.func
};

export default User;
