export default function Header({title}) {
    return (
    <div className="header--container">
             <h1>{title || "Ryan's travel journal"}</h1>
    </div>
    )
}