export default function Box(props) {
    return (
        <>
           <div className="box" style={{backgroundColor: props.on && 'black'}}></div> 
        </>
    )
}