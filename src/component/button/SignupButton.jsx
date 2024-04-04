import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

const StyledButton = styled.button`
    background-color: white;
    color: blue;
    padding: 8px 20px;
    border: 1px solid blue;
    border-radius: 8px;
    width: 95px;
    height: 34px;
    cursor: pointer;
`;

const SignupButton = () => {

    return (
        <Link to="/join\">
            <StyledButton>
                Login
            </StyledButton>
        </Link>
    )
}

export default SignupButton;