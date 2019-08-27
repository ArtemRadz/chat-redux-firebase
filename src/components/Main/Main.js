import React from 'react';

import PropTypes from 'prop-types';

import UsersContainer from '../../containers/UsersContainer';

import Auth from '../Auth/Auth';
import User from '../User/User';
import Loading from '../Loading/Loading';

import './Main.css';

const Main = ({ auth, signIn, signOut }) => {
  return (
    <main id="main-component">
      {auth.status === 'ANONYMOUS' && <Auth signIn={signIn} />}
      {auth.status === 'SIGNED_IN' && <User user={auth} signOut={signOut} />}
      {auth.status === 'SIGNED_IN' && <UsersContainer />}
      {auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading />}
    </main>
  );
};

Main.propTypes = {
  auth: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
};

export default Main;
