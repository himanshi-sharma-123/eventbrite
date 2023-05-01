import React from "react";
import location from "../images/location.png";
import Heart from "react-animated-heart";

export default function Main(props) {
  //*********PROPS MAKE CODE MORE REUSABLE (ONE OF THE PROPERTY OF REACT)************/
  const [isClick, setClick] =
    React.useState(false); /********ONE OF THE HOOKS OF REACT********** */

  return (
    <div className="card">
      <div className="card-image-div">
        <img
          src={props.img}
          width="125px"
          height="168px"
          className={props.class}
          alt={props.title}
        />
      </div>
      <div className="card-text-div">
        <div className="card-location">
          <img
            src={location}
            alt=""
            width="20px"
            height="20px"
            className="location"
          />
          <span className="location">{props.Location}</span>
        </div>
        <h2 className="card-title">{props.name}</h2>
        <div className="card-date">
          <span className="start-date">{props.startDate}</span>
          <span className="dash"> - </span>
          <span className="end-date">{props.endDate}</span>
        </div>
        <div className="like">
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
      </div>
    </div>
  );
}
