import { useEffect, useState } from "react";

function App() {
  const [starWarsData, setStarWarsData] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, []);

  return (
    <div className="App">
      <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
