import React from "react";
import { styled } from "styled-components";

import TagButton from "../button/TagButton";

const TagListContainer = styled.div`
    margin-top: 35px; // 상단 간격
    gap: 25px; // 버튼 사이 간격
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 50px;
`;

const TagList = ({onTagSelect}) => {
    
    const tags = ['#태그1', '#태그2', '#태그3', '#태그4', '#태그5'];

    const handleTagClick = (selectedTag) => {
        onTagSelect(selectedTag);
    }

    return (
        <TagListContainer>
            {tags.map((tag) => (
                <TagButton key={tag} tag={tag} onClick={handleTagClick} />
            ))}
        </TagListContainer>
    );
};

export default TagList;

