import React, {useEffect, useState} from "react";
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



const TagContainer = ({ onSelect }) => {
    const [select, setSelected] = useState();
    // 카테고리 버튼 목록
    const tags = ['다이나믹 프로그래밍', '자료구조', '그래프 이론', '수학', '구현', '문자열', '그리디', '트리', '해시', '정렬'];

    useEffect(() => {
        onSelect("다이나믹 프로그래밍");
    }, []);
    // 카테고리 선택했을 때
    const handleCategorySelect = (tag) => {
        onSelect(tag.target.value);
    };

    return (

        <Container>
            <div style={{display : 'flex', justifyContent: 'center'}}>
                <h2>태그</h2>
            </div>
            <div style={{display : 'flex', justifyContent: 'center'}}>
                <select defaultValue="다이나믹 프로그래밍" onChange={handleCategorySelect} >
                    {tags.map((tag) => (
                        <option
                            key={tag}
                            value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>
            </div>
        </Container>

    );
};

export default TagContainer;