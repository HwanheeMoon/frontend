import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDataById } from '../../dummydata';
import { styled } from "styled-components";

import Header from "../section/Header";
import PostHeader from "../section/PostHeader";


const BoardViewPage = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const postId = parseInt(params.get('id'));

    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const data = fetchDataById(postId);
        setPostData(data);
    }, [postId]);

    return (
        <div>
            <Header />
            {postData && (
                <div>
                    <PostHeader
                        category={postData.category}
                        title={postData.title}
                        comments={postData.comments}
                        likes={postData.likes}
                    />
                    <h2>{postData.author} | {postData.date}</h2>
                    <h3>
                        {postData.tags.map((tag, index) => (
                            <span key={index}>{tag} </span>
                        ))}
                    </h3>
                    <h4>{postData.content}</h4>
                    
                </div>
            )}
            <hr/>
            <h2>댓글</h2>
            <input placeholder="댓글 작성하는 곳"></input>
            <button>댓글 작성</button>
        </div>
    );
};

export default BoardViewPage;
