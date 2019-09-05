import { UPDATE_NEW_MESSAGE, CLEAR_NEW_MESSAGE } from '../constants';

const newMessageReducer = (state = '', { type, payload }) => {
  switch (type) {
    case UPDATE_NEW_MESSAGE:
      return payload.content;
    case CLEAR_NEW_MESSAGE:
      return '';
    default:
      return state;
  }
};

export default newMessageReducer;
