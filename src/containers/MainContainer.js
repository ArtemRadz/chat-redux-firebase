import { connect } from 'react-redux';

import { signIn, signOut } from '../actions/auth';

import Main from '../components/Main/Main';

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
