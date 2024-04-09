import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Header from "../section/Header";
import CreatePostButton from "../button/CreatePostButton";
import TagList from "../list/TagList";
import CategoryList from "../list/CategoryList";
import ListContainer from "../container/ListContainer";

const FootButtonContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const MainPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // 태그 상태 관리, 태그 선택 핸들러
    const [selectedTag, setSelectedTag] = useState(null);

    const handleTagSelect = (tag) => {
        setSelectedTag(tag);
    };
    useEffect(() => {
        const accessToken = sessionStorage.getItem("token");
        if(accessToken) {
            setIsLoggedIn(true);
        }
    }, []);

    // 카테고리 상태 관리, 선택 핸들러
    const [selectedCategory, setSelectedCategory] = useState("전체");

    // 카테고리 select section 부분
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div style = {{padding: '5px'}}>
            <Header />
            <TagList onTagSelect={handleTagSelect} />
            <CategoryList onSelect={handleCategorySelect} />
            <ListContainer category={selectedCategory} tag={selectedTag}/>
            <FootButtonContainer>
                {isLoggedIn && <CreatePostButton/>}
            </FootButtonContainer>
        </div>
    );
};

export default MainPage;