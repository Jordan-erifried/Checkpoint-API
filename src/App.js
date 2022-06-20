import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';

function App() {
  return (
    <div className="App">
      <PersonAdd/>
      <PersonRemove/>
      <PersonList/>
    </div>
  );
}

export default App;
