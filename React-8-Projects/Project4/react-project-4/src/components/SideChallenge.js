import React from "react";
import Box from "./Box";
import { Boxes } from "./BoxData";

export default function SideChallenge() {
  const [myBoxes, setMyBoxes] = React.useState(Boxes);

  const switchColor = (id) => {
    setMyBoxes(prevBox => {
 // modern and sophisticated way       
      return prevBox.map((box) => {
        return box.id === id ? {...box, on: !box.on } : box
      })

 // vanilla js way of working - both work.
    //   const newBoxes = [];
    //   for (let index = 0; index < prevBox.length; index++) {
    //     const newBox = prevBox[index];
    //     if (newBox.id === id) {
    //       const updatedBox = {
    //         ...newBox,
    //         on: !newBox.on,
    //       };
    //       newBoxes.push(updatedBox);
    //     } else newBoxes.push(newBox);
    //   }
    //   return newBoxes;
    });
  };

  const allBoxes = myBoxes.map((box) => (
    <Box key={box.id} on={box.on} id={box.id} handleClick={switchColor} />
  ));
  return (
    <>
      <div className="main--container boxes--layout">{allBoxes}</div>
    </>
  );
}
