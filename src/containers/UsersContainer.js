import { connect } from 'react-redux';

import Users from '../components/Users/Users';

const mapStateToProps = ({ users }) => {
  return { users };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
