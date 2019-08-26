import initialState from '../initialState';
import { SIGN_IN, SIGN_OUT, ATTEMPTING_LOGIN, SET_AS_ADMIN } from '../constants';

export default function authReducer(state = initialState.auth, { type, payload }) {
  switch (type) {
    case ATTEMPTING_LOGIN:
      return {
        status: 'AWAITING_AUTH_RESPONSE'
      };
    case SIGN_OUT:
      return {
        status: 'ANONYMOUS',
        email: null,
        displayName: null,
        photoURL: null,
        uid: null
      };
    case SIGN_IN:
      return {
        status: 'SIGNED_IN',
        email: payload.email,
        displayName: payload.displayName,
        photoURL: payload.photoURL,
        uid: payload.uid,
        isAdmin: false
      };
    case SET_AS_ADMIN:
      return Object.assign({}, state, { isAdmin: true });
    default:
      return state;
  }
}
