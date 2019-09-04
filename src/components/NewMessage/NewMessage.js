import React from 'react';

import PropTypes from 'prop-types';

import './NewMessage.css';

const NewMessage = ({ newMessage, auth, handleChange, handleSubmit }) => (
  <form onSubmit={event => handleSubmit(event, newMessage, auth.uid)}>
    <label>
      <input type="text" value={newMessage} onChange={handleChange} />
      <input type="submit" value="Post" disabled={!newMessage.length} />
    </label>
  </form>
);

NewMessage.propTypes = {
  newMessage: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default NewMessage;
