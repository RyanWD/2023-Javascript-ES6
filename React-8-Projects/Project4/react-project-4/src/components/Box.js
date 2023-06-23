import React from "react";

export default function Box({ on }) {
  const [box, setBox] = React.useState(on);

  const styles = {
    backgroundColor: box ? "#222222" : "#cccccc",
    cursor: "pointer",
  };

  const switchColor = () => {
    setBox((prevBox) => !prevBox);
  };

  return (
    <>
      {/* <div className="box" style={{backgroundColor: props.on && 'black'}}></div>  */}
      <div className="box" style={styles} onClick={switchColor}></div>
    </>
  );
}
