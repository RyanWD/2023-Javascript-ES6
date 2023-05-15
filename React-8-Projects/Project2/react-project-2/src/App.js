import "./App.css";

// Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Card from "./components/Card";

// Data
import {CardData} from "./data/CardData";

function App() {
  const allCards = CardData.map((card) => (
    <Card 
    id={card.id} 
    title={card.title} 
    description={card.description}
    price={card.price}
    coverImg={card.coverImg}
    stats={card.stats}
    location={card.location}
    openSpots={card.openSpots}
    key={card.id}
    />
  ));

  return (
    <div className="App">
      <Nav />
      <Header />
      <section className="main--cards-container">{allCards}</section>
    </div>
  );
}

export default App;
