import { connect } from 'react-redux';

import { deleteMessage } from '../actions/messages';

import Messages from '../components/Messages/Messages';

const mapStateToProps = ({ messages, users, auth }) => {
  return { messages, users, auth };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMessage(key) {
      dispatch(deleteMessage(key));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
