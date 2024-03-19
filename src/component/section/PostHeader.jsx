import React from "react";
import styled from 'styled-components';

import commentIcon from '../../images/commentIcon.png';
import likeIcon from '../../images/likeIcon2.png'


const PostHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 40px;
    margin-left :20px;
    margin-right: 20px;
`;

const PostTitle = styled.h1`
    margin: 0;
    font-weight: bold;
    color: black;
`;

const MetaInfo = styled.div`
    color: gray;
    font-size: 0.9em;
`;

const Icon = styled.img`
    margin-right: 5px;
    width: 12px; 
    height: 12px; 
`;

const PostHeader = ({ category, title, comments, likes }) => {
    return (
        <PostHeaderContainer>
            <div>
                <PostTitle>{category} | {title}</PostTitle>
            </div>
            <MetaInfo>
                <Icon src={commentIcon} alt="comment icon" />
                <span>{comments}  </span>
                <Icon src={likeIcon} alt="like icon" />
                <span>{likes}</span>
            </MetaInfo>
        </PostHeaderContainer>
    );
};

export default PostHeader;
