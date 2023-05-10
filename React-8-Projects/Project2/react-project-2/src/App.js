import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
// Images
import Swimmer from "./assets/swimmer.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Card 
       img={Swimmer}
       rating="5.0"
       reviewCount={6}
       country="United Kingdom"
       title="Life lessons with Katie Zaferes"
       price={136}
      />
    </div>
  );
}

export default App;
