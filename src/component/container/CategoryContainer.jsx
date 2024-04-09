import React, {useState} from "react";
import styled from "styled-components";
import CategorySelectButton from "../button/CategorySelectButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 10px;
`;


const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;



const CategoryContainer = ({ onSelect }) => {
    const [select, setSelected] = useState();
    // 카테고리 버튼 목록
    const categories = ['리뷰', '질문', '공지'];

    // 카테고리 선택했을 때
    const handleCategorySelect = (category) => {
        onSelect(category);
    };

    return (

        <Container>
            <div>
                <h2>카테고리</h2>
            </div>
            <div>
            <ButtonContainer>
                {categories.map((category) => (
                    <CategorySelectButton
                    key={category}
                    category={category}
                    onClick={handleCategorySelect} />
                ))}
            </ButtonContainer>
            </div>
        </Container>

    );
};

export default CategoryContainer;