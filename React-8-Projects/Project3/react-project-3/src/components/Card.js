export default function Card(props) {
  return (
    <div className="card--container">
      <div className="card--image">
        <img src={props.data.image} alt="" />
      </div>
      <div className="card--info">
        <div className="card--info-links">
        <i className="fa-sharp fa-solid fa-location-dot"></i>
          <h3>{props.data.country}</h3>
          
            <a
              href={props.data.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on google maps
            </a>
         
        </div>
        <div className="card--info-header">
          <h1>{props.data.location}</h1>
        </div>
        <div className="card--info-dates">
          <h4>
            {props.data.dateFrom} - {props.data.dateTo}
          </h4>
        </div>
        <div className="card--info-description">
          <p>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
