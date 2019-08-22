import { SIGN_IN, SIGN_OUT, ATTEMPTING_LOGIN } from '../constants';

export const signIn = () => {
  return dispatch => {
    dispatch({ type: ATTEMPTING_LOGIN });
    setTimeout(() => {
      dispatch({
        type: SIGN_IN,
        email: 'artemradzivon@gmail.com',
        displayName: 'Artem Radzivon',
        photoURL: 'https://avatars2.githubusercontent.com/u/11313527?s=400&v=4',
        uid: 'githubUser'
      });
    }, 2000);
  };
};

export const signOut = () => {
  return dispatch => {
    dispatch({ type: ATTEMPTING_LOGIN });
    setTimeout(() => {
      dispatch({
        type: SIGN_OUT
      });
    }, 2000);
  };
};
