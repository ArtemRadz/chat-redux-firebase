import { ADD_MESSAGE, DELETE_MESSAGE } from '../constants';

const messagesReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.key]: {
          uid: payload.uid,
          content: payload.content,
          timeStamp: payload.timeStamp
        }
      };
    case DELETE_MESSAGE: {
      const copyMessagesState = { ...state };
      delete copyMessagesState[payload.key];

      return copyMessagesState;
    }
    default:
      return state;
  }
};

export default messagesReducer;
