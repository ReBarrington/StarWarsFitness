import React, { useState } from "react";
import ClassData from "./ClassData";
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
    width: 40%;
    margin: 1%;
    `

function ClassList() {
    const [data] = useState(ClassData);

    return (
        <StyledCont className="ClassList-container">
            {data.map(info => {
                return (
                    <StyledBox>
                        <ClassCard
                        key={info.name}
                        type={info.type}
                        start={info.start_time}
                        duration={info.duration}
                        intensity={info.intensity}
                        location={info.location}
                        attendees={info.attendees}
                        maxsize={info.max_size}
                        />
                    </StyledBox>
                )
            })}
        </StyledCont>
    )
}

export default ClassList;