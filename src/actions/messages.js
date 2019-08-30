import { ADD_MESSAGE, DELETE_MESSAGE } from '../constants';

export const addMessage = user => {
  return {
    type: ADD_MESSAGE,
    payload: {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    }
  };
};

export const deleteMessage = key => {
  return {
    type: DELETE_MESSAGE,
    payload: {
      key
    }
  };
};
