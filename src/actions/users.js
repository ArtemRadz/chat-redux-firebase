import { ADD_USER } from '../constants';

import { database } from '../firebase/firebase';

const userRef = database.ref('users');

export const addUser = user => {
  return {
    type: ADD_USER,
    payload: {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL
    }
  };
};

export const startListeningForUsers = () => dispatch => {
  userRef.on('child_added', snapshot => {
    dispatch(addUser(snapshot.val()));
  });
};
