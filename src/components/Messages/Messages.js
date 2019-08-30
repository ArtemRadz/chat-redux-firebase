import React from 'react';

import PropTypes from 'prop-types';

import Message from '../Message/Message';

import './Messages.css';

const Messages = ({ auth, messages, users, deleteMessage }) => {
  return (
    <div id="messages-container">
      Messages:
      {Object.entries(messages).map(([key, message]) => (
        <Message
          key={key}
          uid={key}
          messageContent={message.content}
          deleteMessage={deleteMessage}
        />
      ))}
    </div>
  );
};

Messages.propTypes = {
  auth: PropTypes.object.isRequired,
  messages: PropTypes.object,
  users: PropTypes.object,
  deleteMessage: PropTypes.func.isRequired
};

export default Messages;
