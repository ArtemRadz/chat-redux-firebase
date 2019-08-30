import { combineReducers } from 'redux';

import authReducer from './auth';
import usersReducer from './users';
import messagesReducer from './messages';

const reducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  messages: messagesReducer
});

export default reducer;
