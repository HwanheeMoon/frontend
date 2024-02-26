import React, {useState} from "react";
import { styled } from "styled-components";


const StyledButton = styled.button`

    background-color: ${({ isCategorySelected }) => (isCategorySelected ? "#CCCCCC" : "white")};
    color: ${({ isCategorySelected }) => (isCategorySelected ? "black" : "black")};
    font-size: 16px;
    padding: 5px 15px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    min-width: 93px;
    height: 35px;
    cursor: pointer;


    /* 호버 상태 스타일 */
    &:hover {
        background-color: ${({ isCategorySelected }) => (isCategorySelected ? "#CCCCCC" : "#f0f0f0")};
    }

    /* 클릭 상태 스타일 */
    &:focus {
        outline: none; /* 클릭 후 포커스 표시 제거 */
        background-color: #999999; /* 클릭시 더 진한 회색 배경색 */
        color: white; /* 클릭시 글자색을 흰색으로 변경 */
    }

`;

const CategorySelectButton = ({ category, onClick }) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleCategoryClick = () => {
        setIsSelected(true); // 클릭된 버튼의 상태를 true로 변경
        onClick(category);
    };

    return (
        <StyledButton isSelected={isSelected} onClick={handleCategoryClick}>
            {category}
        </StyledButton>
    );
};

export default CategorySelectButton;