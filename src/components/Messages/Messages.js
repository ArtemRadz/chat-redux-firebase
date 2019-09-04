import React from 'react';

import PropTypes from 'prop-types';

import Message from '../Message/Message';

import './Messages.css';

const Messages = ({ messages, deleteMessage }) => {
  const messagesArray = Object.entries(messages);

  return (
    <div id="messages-container">
      {messagesArray.length !== 0 && <p>Messages:</p>}
      {messagesArray.map(([key, message]) => (
        <Message key={key} uid={key} content={message.content} deleteMessage={deleteMessage} />
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.object,
  deleteMessage: PropTypes.func.isRequired
};

export default Messages;
