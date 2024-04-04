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
    
    const tags = ['다이나믹 프로그래밍', '자료구조', '그래프 이론', '수학', '구현', '문자열', '그리디', '트리', '해시', '정렬'];

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

