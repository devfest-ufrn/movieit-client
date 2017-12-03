import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actions as activeSessionActions } from 'ducks/active-session';

import SessionDialog from 'components/session-dialog';

function mapStateToProps(state) {
  const { activeSession } = state;

  return {
    activeSession
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    set: activeSessionActions.set
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionDialog);
