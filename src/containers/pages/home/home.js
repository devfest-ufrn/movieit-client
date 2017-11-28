import { connect } from 'react-redux';

import Home from 'components/pages/home';

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(Home);
