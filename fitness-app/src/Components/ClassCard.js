import React from "react";



const ClassCard = props => {
  return (
  <div className="class-list" key={props.name}>
    <h2>{props.name}</h2>
    <p>Type: {props.type}</p>
    <p>Start Time: {props.start}</p>
    <p>Duration: {props.duration}</p>
    <p>Intensity: {props.intensity} </p>
    <p>Location: {props.location} </p>
    <p>Attendees: {props.attendees} </p>
    <p>Max-Size: {props.maxsize} </p>
  </div>
  );
}

export default ClassCard;