import React from "react";
import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"
import user from "../assets/user.png"

export default function ObjectState() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty

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
            <img
              src={starIcon}
              className="card--favorite"
              onClick={toggleFavorite}
            />
            <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
          </div>
        </article>
      </main>
    </div>
  );
}
