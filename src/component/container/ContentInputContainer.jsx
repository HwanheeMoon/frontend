import {styled} from "styled-components";
import React from "react";

const Input = styled.input`
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    font-size: 16px;
    width: 300px;
    height: 300px;
    text-align: left;
    margin-left: 30px;
`;

const ContentInputContainer = (change) => {


    return (
        <div>
            <h2>
                내용
            </h2>
        <Input
            type="text"
            placeholder="내용을 입력하세요"
            onChange={e => change(e.target.value)}
        />
        </div>

    );

}

export default ContentInputContainer;