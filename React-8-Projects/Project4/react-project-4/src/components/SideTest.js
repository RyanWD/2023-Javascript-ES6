import React from "react"

export default function SideTest() {
    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // prevState is refering to 'thingsArray' current state
        setThingsArray(prevState => {
            // spread operator copies entire array
            return [...prevState, `Thing ${prevState.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p className="side--test-p" key={thing}>{thing}</p>)
    
    return (
        <div>
            <button className="side--test" onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}