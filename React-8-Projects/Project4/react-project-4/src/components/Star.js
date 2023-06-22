import starFilled from "../assets/star-filled.png";
import starEmpty from "../assets/star-empty.png";

export default function Star(props) {
  let starIcon = props.isFilled ? starFilled : starEmpty;

  return (
    <>
      <img
        src={starIcon}
        className="card--favorite"
        onClick={props.handleClick}
      />
    </>
  );
}
