import initialState from '../initialState';
import { ADD_MESSAGE, DELETE_MESSAGE } from '../constants';

const messagesReducer = (state = initialState.messages, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.key]: {
          uid: payload.uid,
          content: payload.content,
          timeStamp: payload.content
        }
      };
    case DELETE_MESSAGE: {
      const copyMessagesState = Object.assign({}, state);
      delete copyMessagesState[payload.key];
      return copyMessagesState;
    }
    default:
      return state;
  }
};

export default messagesReducer;
