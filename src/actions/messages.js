import { ADD_MESSAGE, DELETE_MESSAGE } from '../constants';

import { database } from '../firebase/firebase';

import { clearNewMessage } from './newMessage';

const messagesRef = database.ref('messages');

export const addMessage = (key, { content, uid }) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      key,
      uid,
      content
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

export const createMessage = ({ content, uid }) => dispatch => {
  const message = {
    timeStamp: Date.now(),
    content,
    uid
  };

  messagesRef.push(message).then(() => {
    dispatch(clearNewMessage());
  });
};

export const destroyMessage = key => dispatch => {
  messagesRef
    .child(key)
    .remove()
    .then(() => {
      dispatch(deleteMessage(key));
    });
};

export const startListeningForMessages = () => dispatch => {
  messagesRef.on('child_added', snapshot => {
    dispatch(addMessage(snapshot.key, snapshot.val()));
  });

  messagesRef.on('child_changed', snapshot => {
    dispatch(addMessage(snapshot.key, snapshot.val()));
  });

  messagesRef.on('child_removed', snapshot => {
    dispatch(deleteMessage(snapshot.key));
  });
};
