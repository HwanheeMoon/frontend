import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

const StyledButton = styled.button`
    background-color: #3a3a9b;
    color: white;
    padding: 8px 20px;
    border: 1px solid #3a3a9b;
    border-radius: 8px;
    width: 95px;
    height: 34px;
    cursor: pointer;
`;

const LogoutButton = () => {
    const navigate = useNavigate();
    const logout =  async () => {
        window.location.href = "http://localhost:8080/logout";
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("id");
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