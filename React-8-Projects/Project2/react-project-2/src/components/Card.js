import star from "../assets/star.png";

export default function Card(props) {
  return (
    <div className="main--card-container">
      <div className="main--card">
        <div className="main--image-container">
          <img src={props.img} alt="" />
          <div className="main--image-status">SOLD OUT</div>
        </div>
        <div className="main--info-container">
          <div className="main--info-rating">
            <img src={star} alt="" />
            <h6>
              {props.rating}{" "}
              <span>
                ({props.reviewCount})-{props.country}
              </span>
            </h6>
          </div>
          <div className="main--info-container">
            <h6 className="main--info-description">{props.title}</h6>
            <h6 className="main--info-description">
              <span>From £{props.price} </span>/ person
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
