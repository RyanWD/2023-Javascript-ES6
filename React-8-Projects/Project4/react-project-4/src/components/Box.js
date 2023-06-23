
export default function Box(props) {

  const styles = {
    backgroundColor: props.on ? "#222222" : "#cccccc",
    cursor: "pointer",
  };

  

  return (
    <>
      {/* <div className="box" style={{backgroundColor: props.on && 'black'}}></div>  */}
      <div className="box" style={styles} onClick={() => props.handleClick(props.id)}></div>
    </>
  );
}
