import { connect } from 'react-redux';

import { destroyMessage } from '../actions/messages';

import Messages from '../components/Messages/Messages';

const mapStateToProps = ({ messages }) => {
  return { messages };
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
