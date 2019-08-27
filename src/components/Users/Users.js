import React from 'react';

import PropTypes from 'prop-types';

import User from '../User/User';

import './Users.css';

const Users = ({ users }) => (
  <div id="users-component">
    {Object.entries(users).map(([key, user]) => (
      <User key={key} user={user} />
    ))}
  </div>
);

Users.propTypes = {
  users: PropTypes.object.isRequired
};

export default Users;
