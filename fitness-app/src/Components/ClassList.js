import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassCard from "./ClassCard";
import styled from "styled-components";

const StyledCont = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const StyledBox = styled.div `
    border: 5px solid black;
    width: 300px;
    margin: 1%;
    `

function ClassList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get('https://swapi.co/api/people')
          .then(response => {
            console.log(response.data.results, " is response.data.results")
            const data = response.data.results;
            setData(data);
          })
      }, []);

    return (
        <StyledCont className="ClassList-container">
            {data.map(info => {
                return (
                    <StyledBox key={info.name}>
                        <ClassCard
                        name={info.name}
                        height={info.height}
                        start={info.created}
                        mass={info.mass}
                        />
                    </StyledBox>
                )
            })}
        </StyledCont>
    )
}

export default ClassList;