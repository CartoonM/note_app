import {useEffect} from 'react';
import {connect} from 'react-redux';
import Layout from './hoc/Layout/Layout';
import NoteList from './containers/NoteList/NoteList';
import Login from './containers/Login/Login';
import {autoLogin} from './store/actions/auth'

function App({ token, autoLogin }) {

  // useEffect(() => autoLogin(), [autoLogin]);

  return (
    <div className="App">
      <Layout>
        {!token ? <Login /> : null}
        <NoteList />
      </Layout>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    token: state.auth.get('token')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
