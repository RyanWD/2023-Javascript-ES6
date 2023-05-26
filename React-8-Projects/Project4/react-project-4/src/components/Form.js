import { memesData } from "../components/MemesData";
import React from "react";

export default function Form() {
  // array destructuring, 1st is value passed in, 2nd is a function

  const allMemes = memesData.data.memes;
  // const memeUrl = "";
  const [memeUrl, setMemeUrl] = React.useState("https://i.imgflip.com/30b1gx.jpg")
  const randomMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMemeUrl(prevMemeUrl => prevMemeUrl = allMemes[randomNumber].url)
   
  };

  return (
    <div className="form--container">
      <div className="form--inputs">
        <input type="text"></input>
        <input type="text"></input>
      </div>
    

      <button type="button" onClick={randomMeme}>
        Get a new meme image 🖼
      </button>
      <img
        src={memeUrl ? memeUrl : "https://i.imgflip.com/30b1gx.jpg"}
        width="100%"
        height="auto"
        alt="memePic"
      />
    </div>
  );
}
