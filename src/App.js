import Layout from './hoc/Layout/Layout';
import NoteList from './containers/NoteList/NoteList';

function App() {
  return (
    <div className="App">
      <Layout>
        <NoteList />
      </Layout>
    </div>
  );
}

export default App;
