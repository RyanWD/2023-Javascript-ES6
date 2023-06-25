import React, {useEffect} from "react";
// Style
import "./App.css";
// Components
import Contacts from "./components/Contacts";
import Jokes from "./components/Jokes";
// Data
import ContactsData from "./data/ContactsData";
import JokesData from "./data/JokesData";

function App() {
  const allContacts = ContactsData.map((contact) => (
    <Contacts
      image={contact.image}
      name={contact.name}
      phone={contact.phone}
      email={contact.email}
      isLive={contact.isLive}
      key={contact.name}
    />
  ));

  useEffect(() => {
    addIdToObjects();
  }, []);

  const [allJokes, setAllJokes] = React.useState([])

  const addIdToObjects = () => {
    const updatedData = JokesData.map((obj, index) => {
      return { ...obj, id: index + 1 };
    });
    
    setAllJokes(updatedData)
  };

  const myJokes = allJokes.map((joke, index) => (<Jokes setup={joke.setup} punchline={joke.punchline} key={index} id={joke.id}/>))

  return (
    <div className="App">
      <h1>Contacts component</h1>
      <div className="contacts">{allContacts}</div>
      <h1>Jokes component</h1>
      <div className="jokes">{myJokes}</div>
    </div>
  );
}

export default App;
