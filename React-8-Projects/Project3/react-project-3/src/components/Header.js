export default function Header({ title }) {
  return (
    <div className="header--container">
      <i className="fa-solid fa-earth-europe"></i>
      <h1>{title || "Ryan's travel journal"}</h1>
    </div>
  );
}
