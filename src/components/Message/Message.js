import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';

import './Message.css';

const Message = ({ uid, content, deleteMessage }) => {
  const handleClick = () => {
    deleteMessage(uid);
  };

  return (
    <div id="message-item">
      <p>{content}</p>
      <Button title={'Delete'} handleClick={handleClick} />
    </div>
  );
};

Message.propTypes = {
  content: PropTypes.string.isRequired,
  deleteMessage: PropTypes.func.isRequired
};

export default Message;
