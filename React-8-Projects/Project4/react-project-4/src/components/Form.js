import { memesData } from "../components/MemesData";
import Image from "../components/Image"
import React from "react";

export default function Form() {
  // array destructuring, 1st is value passed in, 2nd is a function

  const allMemes = memesData.data.memes;
  const [meme, setMeme] = React.useState("")
  const randomMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    // if you need access to previous state (first parameter is current state)
    // setMemeUrl(prevMemeUrl => prevMemeUrl = allMemes[randomNumber].url)
    setMeme(allMemes[randomNumber])
   
  };

  return (
    <div className="form--container">
      <div className="form--inputs">
        <input type="text" placeholder="Top text"></input>
        <input type="text" placeholder="Bottom text"></input>
      </div>
    

      <button type="button" onClick={randomMeme}>
        Get a new meme image 🖼
      </button>
      <Image memeUrl={meme.url} key={meme.id} alt={meme.name}/>
    </div>
  );
}
