import './App.css';
// components
import Header from './components/Header'
import Main from './components/Main'
import ArrayState from './components/ArrayState'
import ObjectState from './components/ObjectState';
import SideChallenge from './components/SideChallenge';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ArrayState />
      <ObjectState />
      <SideChallenge />
    </div>
  );
}

export default App;
