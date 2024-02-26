import React, {useState} from "react";
import { styled } from "styled-components";

import CategoryListItem from "../item/CategoryListItem";

const categories = ['전체', '공지', '리뷰', '질문', '문의'];

const CategoryListContainer = styled.div`
    margin-top: 40px;
    gap: 35px;
    display: flex;
    align-items: center;
    margin-left: 40px;
    background-color: white;
`;

const CategoryList = ({onSelect}) => {
    const[selectedCategory, setSelectedCategory] = useState('전체');

    const handleCategoryClick = (category) => {
        selectedCategory(category);
        onSelect(category);
    };

    return(
        <CategoryListContainer>
            {categories.map((category) => (
                <CategoryListItem
                key={category}
                category={category}
                onClick={handleCategoryClick}
                isSelected={selectedCategory === category}
                />
            ))}
        </CategoryListContainer>
    );
};

export default CategoryList;