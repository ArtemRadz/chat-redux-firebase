import React from 'react';

import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './NewMessage.css';

const NewMessage = ({ newMessage, auth, handleChange, handleSubmit }) => {
  const onClickSubmit = event => {
    event.preventDefault();
    handleSubmit(newMessage, auth.uid);
  };

  return (
    <form className="form-message">
      <Input label={'New message'} value={newMessage} handleChange={handleChange} />
      <Button onClick={onClickSubmit} disabled={!newMessage.length} style={{ marginLeft: '15px' }}>
        Post
      </Button>
    </form>
  );
};

NewMessage.propTypes = {
  newMessage: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default NewMessage;
