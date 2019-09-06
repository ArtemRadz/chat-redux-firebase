import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './Message.css';

const Message = ({ id, content, timeStamp, user, belongsToUser, deleteMessage }) => {
  const handleClick = () => {
    deleteMessage(id);
  };

  const className = belongsToUser ? 'current-user' : '';

  return (
    <article id="message-item" className={className}>
      <h4 className="message-user-name">{user.displayName}</h4>
      <span className="message-time-post">{timeStamp}</span>
      <p className="message-content">{content}</p>
      {belongsToUser && <Button onClick={handleClick}>Delete</Button>}
    </article>
  );
};

Message.propTypes = {
  content: PropTypes.string.isRequired,
  deleteMessage: PropTypes.func.isRequired
};

export default Message;
