import { ADD_USER } from '../constants';

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email
    }
  };
};
