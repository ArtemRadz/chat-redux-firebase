import { combineReducers } from 'redux';

import authReducer from './auth';
import usersReducer from './users';
import messagesReducer from './messages';
import newMessageReducer from './newMessage';

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer,
  newMessage: newMessageReducer
});

export default reducer;
