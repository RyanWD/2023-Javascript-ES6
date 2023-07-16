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

  // const [firstName, setFirstName] = React.useState("")
  const [person, setPerson] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isChecked: true,
    employment: "",
    favColor: ""
  })

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(person)
  }

  console.log(person)

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

      <form onSubmit={handleSubmit}>
      <label style={{color: 'black'}}>
        First Name:
        <input
          type="text"
          name="firstName"
          value={person.firstName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={{color: 'black'}}>
        Last Name: 
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label style={{color: 'black'}}>
        Email:
        <input
          type="email"
          name="email"
          value={person.email}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label htmlFor="textarea" style={{color: 'black'}}>
        Comment:
      <textarea  
          name="comment"
          id="textarea"
          value={person.comment}
          onChange={handleInputChange}/>
      </label>
      <label htmlFor="textarea" style={{color: 'black'}}>
        Are you friendly?:
      <input
          type="checkbox" 
          name="isChecked"
          checked={person.isChecked}
          onChange={handleInputChange}/>
      </label>

      <br />
      <br />
            
      <fieldset>
          <legend>Current employment status</legend>
          
          <input 
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={person.employment === 'unemployed'}
              onChange={handleInputChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          
          <input 
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              checked={person.employment === 'part-time'}
              onChange={handleInputChange}

          />
          <label htmlFor="part-time">Part-time</label>
          <br />
          
          <input 
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              checked={person.employment === 'full-time'}
              onChange={handleInputChange}


          />
          <label htmlFor="full-time">Full-time</label>
          <br />
          
      </fieldset>

      <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={person.favColor}
                onChange={handleInputChange}
                name="favColor"
            >
                <option value=""></option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <button>Submit</button>
      </form>
    </div>
  );
}
