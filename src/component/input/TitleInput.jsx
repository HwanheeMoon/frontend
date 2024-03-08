import React from "react";
import { styled } from "styled-components";

const Input = styled.input`
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    font-size: 16px;
    width: 300px;
    text-align: left;
    margin-left: 30px;
`;

const TitleInput = ({ value, onChange }) => {
    return (
        <Input
            type="text"
            placeholder="제목을 입력하세요"
            value={value}
            onChange={onChange}
        />
    );
};

export default TitleInput;


