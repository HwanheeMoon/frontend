import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchDataById } from '../../dummydata';

import Header from "../section/Header";

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
                    <h1>{postData.category} | {postData.title}</h1><br/>
                    <div>
                        <span>comments : {postData.comments} | </span>
                        <span>likes : {postData.likes}</span>
                    </div>
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
