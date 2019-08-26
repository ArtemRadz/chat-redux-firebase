import { SIGN_IN, SIGN_OUT, ATTEMPTING_LOGIN } from '../constants';

import { auth, googleAuthProvider } from '../firebase/firebase';

export const signIn = () => dispatch => {
  dispatch({ type: ATTEMPTING_LOGIN });
  auth.signInWithPopup(googleAuthProvider);
};

export const signOut = () => dispatch => {
  dispatch({ type: ATTEMPTING_LOGIN });
  auth.signOut();
};

export const startListeningToAuthChanges = () => dispatch => {
  dispatch({ type: ATTEMPTING_LOGIN });
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: SIGN_IN,
        payload: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }
      });
    } else {
      dispatch({
        type: SIGN_OUT
      });
    }
  });
};
