import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions/auth';

import Auth from '../../components/Auth/Auth';
import User from '../../components/User/User';
import Loading from '../../components/Loading/Loading';

import './Main.css';

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn() {
      dispatch(signIn());
    },
    signOut() {
      dispatch(signOut());
    }
  };
};

const Main = ({ auth, signIn, signOut }) => {
  return (
    <main id="main-component">
      {auth.status === 'ANONYMOUS' && <Auth signIn={signIn} />}
      {auth.status === 'SIGNED_IN' && <User user={auth} signOut={signOut} />}
      {auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading />}
    </main>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
