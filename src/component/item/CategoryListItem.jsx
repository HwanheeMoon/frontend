import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
    background: none;
    border: none;
    padding:0;
    margin:0;
    font-size: 16px;
    cursor: pointer;

    color: ${props => (props.isSelected ? 'blue' : 'black')};
    font-weight: ${props => (props.isSelected ? 'bold' : 'normal')};
    
    & :hover{
        text-decoration: underline;
    }
`;

const CategoryListItem = ({category, onClick, isSelected }) => {
    return(
        <StyledButton onClick={()=> onClick(category)} isSelected={isSelected}>
            {category}
        </StyledButton>
    );
};

export default CategoryListItem;