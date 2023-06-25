import React from 'react'


export default function Jokes({setup, punchline, id}) {

    const [showJoke, setShowJoke] = React.useState(false)

    const toggleJoke = () => {
        setShowJoke((prevShowJoke) => !prevShowJoke)
    }


    const styles = {
        color: 'red',
        padding: '1rem 2rem',
        border: '1px solid #ccc',
        cursor: 'pointer'
    }

    return (
    <div className="jokes-card" onClick={toggleJoke}>
        {id &&<h1>{id}</h1>}
        {setup &&<h3>{setup}</h3>}
        {showJoke &&<p>{punchline}</p>}
        <button style={styles}>{showJoke ? 'Hide' : 'Show'} punchline</button>
        <hr />
    </div>
    )
}