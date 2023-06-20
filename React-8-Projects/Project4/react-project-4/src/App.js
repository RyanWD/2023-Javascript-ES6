import './App.css';
// components
import Header from './components/Header'
import Main from './components/Main'
import ArrayState from './components/ArrayState'
import ObjectState from './components/ObjectState';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ArrayState />
      <ObjectState />
    </div>
  );
}

export default App;
