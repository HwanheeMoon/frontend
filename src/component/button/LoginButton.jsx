import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    padding: 8px 20px;
    border: 1px solid blue;
    border-radius: 8px;
    width: 95px;
    height: 34px;
    cursor: pointer;
`;

const LoginButton = () => {
    return (
        <Link to="/login">
            <StyledButton>
                Login
            </StyledButton>
        </Link>
    );
};

export default LoginButton;