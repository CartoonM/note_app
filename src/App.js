import {connect} from 'react-redux';
import Layout from './hoc/Layout/Layout';
import NoteList from './containers/NoteList/NoteList';
import Login from './containers/Login/Login';

function App({ token }) {
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

export default connect(mapStateToProps, null)(App);
