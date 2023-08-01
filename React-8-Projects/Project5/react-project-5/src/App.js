import { useEffect, useState } from "react";

function App() {

  // StarWars useEffect practice
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1)

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);


  // WindowWidth practice
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <div id="starwarsApiCall">
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(newCount => newCount + 1)}>Get next character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>

      <hr />

      <div id="windowWidth">
        <button onClick={() => setShow(prevShow => !prevShow)}>Toggle window tracker</button>
        {show &&<WindowTracker />}
      </div>
    </div>
  );
}

function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // resize event triggers and updates window width
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', watchWidth)
    // removing the event when not in use saves a 'memory leak'
    return function() {
      window.removeEventListener("resize", watchWidth)
    }
  }, [])

  return (
    <h1>Window width: {windowWidth}</h1>
  )
}

export default App;
