import {memesData} from '../components/MemesData'

export default function Form() {
  const handleClick = (event) => {
    event.preventDefault()
    console.log('yep')
  }

  const allMemes = memesData.data.memes
  
  const randomMeme = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    console.log(randomNumber)
    const {url} = allMemes[randomNumber]
    console.log(memeUrl)
  }

  
  return (
    <div className="form--container">
      <form onSubmit={handleClick}>
        <div className="form--inputs">
        <input type="text"></input>
        <input type="text"></input>
        </div>
        <button type="submit">Get a new meme image 🖼</button>
      </form>
      <button type="button" onClick={randomMeme}>Get a new meme image 🖼</button>
        <img src={memeUrl ? memeUrl : 'https://i.imgflip.com/30b1gx.jpg'} width="100%" height="auto"/>
    </div>
  );
}
