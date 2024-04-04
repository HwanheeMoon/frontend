import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
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

const LogoutButton = () => {
    const navigate = useNavigate();
    const logout =  async () => {
        window.location.href = "http://localhost:8080/logout";
        localStorage.removeItem("token");
        navigate("/");
    }
    useEffect(() => {

    }, []);
    return (
            <StyledButton onClick={logout}>
                Logout
            </StyledButton>
    );
};

export default LogoutButton;