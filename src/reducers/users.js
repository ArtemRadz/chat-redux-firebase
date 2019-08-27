import initialState from '../initialState';
import { ADD_USER } from '../constants';

const usersReducer = (state = initialState.users, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        [payload.uid]: {
          displayName: payload.displayName,
          email: payload.email,
          photoURL: payload.photoURL
        }
      };
    default:
      return state;
  }
};

export default usersReducer;
