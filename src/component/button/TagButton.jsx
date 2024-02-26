import React from "react";
import { styled } from "styled-components";


const StyledButton = styled.button`
    background-color: rgba(181, 200, 255, 0.3);
    color:#2851E3;
    font-size: 16px;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    min-width: 93px;
    height: 35px;
    cursor: pointer;
`;

const TagButton = ({tag , onClick}) => {
    return(
        <StyledButton onClick={()=> onClick(tag)}>{tag}</StyledButton>
    );
};

export default TagButton;