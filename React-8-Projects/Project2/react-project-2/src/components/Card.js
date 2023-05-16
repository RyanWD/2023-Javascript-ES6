import star from "../assets/star.png";



export default function Card(props) {
  console.log(props)
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE'
  }
  return (
    
    <div className="main--card-container">
      <div className="main--card">
        <div className="main--image-container">
          <img src={props.item.coverImg} alt="" />
        {badgeText &&  <div className="main--image-status">{badgeText}</div>}
        </div>
        <div className="main--info-container">
          <div className="main--info-rating">
            <img src={star} alt="" />
            <h6>
              {props.item.stats.rating}{" "}
              <span>
                ({props.item.stats.reviewCount}) - {props.item.location}
              </span>
            </h6>
          </div>
          <div className="main--info-container">
            <h6 className="main--info-description">{props.item.title}</h6>
            <h6 className="main--info-description">
              <span>From £{props.item.price} </span>/ person
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
