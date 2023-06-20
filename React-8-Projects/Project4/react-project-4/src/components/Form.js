import { memesData } from "../components/MemesData";
import Image from "../components/Image"
import React from "react";

export default function Form() {
  // array destructuring, 1st is value passed in, 2nd is a function

  // const allMemes = memesData.data.memes;
  const [memeObject, setMemeObject] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  })

  const [memeArray, setMemeArray] = React.useState(memesData.data.memes)
  // const [meme, setMeme] = React.useState("")
  const randomMeme = () => {
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    // if you need access to previous state (first parameter is current state)
    // setMemeUrl(prevMemeUrl => prevMemeUrl = allMemes[randomNumber].url)
    setMemeObject(prevMemeObject => {
      return {
        ...prevMemeObject,
        randomImage: memeArray[randomNumber]

      }
    })
   
  };

  return (
    <div className="form--container">
      <div className="form--inputs">
        <input type="text" placeholder="Top text"></input>
        <input type="text" placeholder="Bottom text"></input>
      </div>
    

      <button type="button" onClick={randomMeme}>
        Get a new meme image
      </button>
      <Image memeUrl={memeObject.randomImage.url} key={memeObject.randomImage.id} alt={memeObject.randomImage.name}/>
    </div>
  );
}
