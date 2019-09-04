import { connect } from 'react-redux';

import { updateNewMessage, clearNewMessage } from '../actions/new-message';
import { createMessage } from '../actions/messages';

import NewMessage from '../components/NewMessage/NewMessage';

const mapStateToProps = ({ newMessage, auth }) => {
  return { newMessage, auth };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange(event) {
      dispatch(updateNewMessage(event.target.value));
    },
    handleSubmit(event, content, uid) {
      event.preventDefault();
      dispatch(createMessage({ content, uid }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessage);
