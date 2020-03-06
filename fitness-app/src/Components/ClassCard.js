import React from "react";
import styled from "styled-components";

const Card = styled.div `
  background-color: gray;
  padding: 5%;
  color: black;
  `


const ClassCard = props => {
  console.log(props, "props")
  return (
  <Card className="class-list" >
    <h2>{props.name}'s Fitness Program</h2>
    <p>Start Time: {props.start}</p>
    <p>Goal Weight: {props.mass}kg</p>
  </Card>
  );
}

export default ClassCard