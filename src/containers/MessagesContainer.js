import { connect } from 'react-redux';

import { destroyMessage } from '../actions/messages';

import Messages from '../components/Messages/Messages';

const mapStateToProps = ({ auth: currentUser, users, messages }) => {
  return { currentUser, users, messages };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMessage(key) {
      dispatch(destroyMessage(key));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
