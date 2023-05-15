import Mail from "../assets/mail.png";
import Phone from "../assets/phone-call.png";

export default function Contacts({ image, name, phone, email, isLive }) {
  return (
    <div className="contact-card">
      <img src={image} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={Phone} />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={Mail} />
        <p>{email}</p>
      </div>
      {isLive && <p>Is live {isLive}</p>}
    </div>
  );
}
