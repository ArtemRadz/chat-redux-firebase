import { UPDATE_NEW_MESSAGE, CLEAR_NEW_MESSAGE } from '../constants';

export const updateNewMessage = content => {
  return {
    type: UPDATE_NEW_MESSAGE,
    payload: { content }
  };
};

export const clearNewMessage = () => {
  return {
    type: CLEAR_NEW_MESSAGE
  };
};
