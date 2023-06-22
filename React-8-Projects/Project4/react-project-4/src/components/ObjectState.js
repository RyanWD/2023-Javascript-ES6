import React from "react";
import Star from "../components/Star";
import user from "../assets/user.png"

export default function ObjectState() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  function toggleFavorite() {
    setContact(prevContact => {
        // like with array state, changing a property, will replace the entire object
        // use the spread to pull in the entire object and change what you want

        return {
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }
    })
}
  return (
    <div className="main--container">
      <main>
        <article className="card">
          <img src={user} className="card--image" />
          <div className="card--info">
             {/* passing data down to child components, including functions  */}
             {/* no way to 'emit' data, so shared data must be pushed up to parent components */}
           <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
            <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
          </div>
        </article>
      </main>
    </div>
  );
}
