import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import axios from "axios";

const StyledButton = styled.button`
    background-color: #ffffff;
    color: #3a3a9b;
    padding: 8px 20px;
    border: 1px solid #3a3a9b;
    border-radius: 8px;
    width: 95px;
    height: 34px;
    cursor: pointer;
`;

const MyPageButton = () => {
    return (
        <Link to="/mypage">
            <StyledButton>
                내 정보
            </StyledButton>
        </Link>
    );
};

export default MyPageButton;