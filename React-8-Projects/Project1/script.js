function Navbar() {
  return (
    <nav className="myNav d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img src="react-logo.png" alt="react logo" />
        <h2 className="m-0 mx-1">ReactFacts</h2>
      </div>
      <div>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

function MainContent() {
  return (
    <div className="myMain">
      <h1 className="mb-3">Fun facts about react</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained on Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <div className="myFooter">
      <small>© 2023 Saunders development. All rights reserved.</small>
    </div>
  );
}

ReactDOM.render(
  <div className="myContainer">
    <Navbar />
    <MainContent />
    <Footer />
  </div>,
  document.getElementById("root")
);

