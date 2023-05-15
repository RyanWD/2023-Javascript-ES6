export default function Jokes({setup, punchline}) {
    return (
    <div className="jokes-card">
        {setup &&<h3>{setup}</h3>}
        {punchline &&<p>{punchline}</p>}
        <hr />
    </div>
    )
}