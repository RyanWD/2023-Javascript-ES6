import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Contacts from "./components/Contacts";
// Card Images
import Swimmer from "./assets/swimmer.png";
// Contact Images
import Cat1 from "./assets/cat1.jpg";
import Cat2 from "./assets/cat2.jpg";
import Cat3 from "./assets/cat3.jpg";
import Cat4 from "./assets/cat4.jpg";


function App() {
  const contacts = [
    {
      image: Cat1,
      name: "Mr. Whiskerson",
      phone: "(212) 555-1234",
      email: "mr.whiskaz@catnap.meow",
    },
    {
      image: Cat2,
      name: "Fluffykins",
      phone: "(212) 555-4444",
      email: "mr.fluffy@catnap.meow",
    },
    {
      image: Cat3,
      name: "ZoomZoom",
      phone: "(212) 555-1111",
      email: "mr.zzomy@catnap.meow",
    },
    {
      image: Cat4,
      name: "Fatboy",
      phone: "(212) 555-3333",
      email: "mr.FatCat@catnap.meow",
    },
  ];

  const allContacts = contacts.map((contact) => (
    <Contacts
      image={contact.image}
      name={contact.name}
      phone={contact.phone}
      email={contact.email}
      key={contact.name}
    />
  ));
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
       <div className="contacts">{allContacts}</div>
      
    </div>
  );
}

export default App;
