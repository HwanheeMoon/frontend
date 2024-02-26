import React, {useState} from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Header from "../section/Header";
import CreatePostButton from "../button/CreatePostButton";
import TagList from "../list/TagList";
import CategoryList from "../list/CategoryList";

const FootButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const MainPage = () => {


    // 태그 상태 관리, 태그 선택 핸들러
    const [selectedTag, setSelectedTag] = useState(null);

    const handleTagSelect = (tag) => {
        setSelectedTag(tag);
    };


    // 카테고리 상태 관리, 선택 핸들러
    const [selectedCategory, setSelectedCategory] = useState('전체');

    // 카테고리 select section 부분
    const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    };



    return (
        <div>
            <Header />
            <TagList onTagSelect={handleTagSelect} />
            <CategoryList onSelect={handleCategorySelect} />
            <FootButtonContainer>
                <CreatePostButton/>
            </FootButtonContainer>
        </div>
    );
};

export default MainPage;