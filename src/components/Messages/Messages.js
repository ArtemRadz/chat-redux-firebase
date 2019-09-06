import React from 'react';

import PropTypes from 'prop-types';

import Message from '../Message/Message';

import './Messages.css';

const Messages = ({ users, currentUser, messages, deleteMessage }) => {
  const messagesArray = Object.entries(messages);

  return (
    <section id="messages-container">
      {messagesArray.length !== 0 && <p>Messages:</p>}
      {messagesArray.map(([key, message]) => (
        <Message
          key={key}
          id={key}
          user={users[message.uid]}
          belongsToUser={currentUser.uid && message.uid === currentUser.uid}
          {...message}
          deleteMessage={deleteMessage}
        />
      ))}
    </section>
  );
};

Messages.propTypes = {
  messages: PropTypes.object,
  deleteMessage: PropTypes.func.isRequired
};

export default Messages;
