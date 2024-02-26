import React from "react";
import styled from "styled-components";
import CategorySelectButton from "../button/CategorySelectButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 10px;
`;

const Title = styled.div`
    font-size: 18px;
    color: black;
    margin-bottom: 10px;
    text-align: left;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;



const CategoryContainer = () => {

    // 카테고리 버튼 목록
    const categories = ['리뷰', '질문', '문의'];

    // 카테고리 선택했을 때
    const handleCategorySelect = (category) => {
        console.log('Selected category:', category);
    };

    return (

        <Container>
            <Title>카테고리</Title>
            <ButtonContainer>
                {categories.map((category) => (
                    <CategorySelectButton
                    key={category}
                    category={category}
                    onClick={handleCategorySelect} />
                ))}
            </ButtonContainer>
        </Container>
        
    );
};

export default CategoryContainer;