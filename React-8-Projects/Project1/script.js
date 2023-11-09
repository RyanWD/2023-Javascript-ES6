function Navbar(props) {
  return (
    // <nav className={`myNav d-flex justify-content-between align-items-center ${props.darkMode ? 'dark': ''}`}>
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav--logo_icon" src="react-logo.png" />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

function MainContent(props) {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Fun facts about React</h1>
      <ul className="main--facts">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

// function Footer() {
//   return (
//     <div className="myFooter">
//       <small>© 2023 Saunders development. All rights reserved.</small>
//     </div>
//   );
// }

ReactDOM.render(
  <div className="myContainer">
    <Navbar darkMode="true"/>
    <MainContent darkMode="true"/>
    {/* <Footer /> */}
  </div>,
  document.getElementById("root")
);
