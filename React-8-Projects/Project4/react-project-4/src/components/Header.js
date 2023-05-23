import troll from "../assets/troll.png";

export default function Header() {
  return (
    <div className="header--container">
      <div className="header--title">
        <img src={troll} alt="Troll face meme" />
        <h1>Meme generator</h1>
      </div>
      <div className="header--subtitle">
        <h3>React Course - Project 4</h3>
      </div>
    </div>
  );
}
