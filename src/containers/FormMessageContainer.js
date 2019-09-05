import { connect } from 'react-redux';

import { updateNewMessage } from '../actions/newMessage';
import { createMessage } from '../actions/messages';

import FormMessage from '../components/FormMessage/FormMessage';

const mapStateToProps = ({ newMessage, auth }) => {
  return { newMessage, auth };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange(event) {
      dispatch(updateNewMessage(event.target.value));
    },
    handleSubmit(content, uid) {
      dispatch(createMessage({ content, uid }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormMessage);
