import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";


const StyledButton = styled.button`
    background-color: #EFF3FD;
    color: #3563E9;
    padding: 8px 20px;
    border: 1px solid blue;
    border-radius: 8px;
    width: 85px;
    height: 40px;
    cursor: pointer;
`;

const CreatePostButton = () => {
    return(
        <Link to='/write'>
            <StyledButton>
                글쓰기
            </StyledButton>    
        </Link>
    );
};

export default CreatePostButton;