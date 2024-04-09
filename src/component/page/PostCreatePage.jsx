import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { styled } from "styled-components";

import Header from "../section/Header";
import CategoryContainer from "../container/CategoryContainer";

import TitleInput from "../input/TitleInput";
import TagContainer from "../container/TagContainer";
import AddPostButton from "../button/AddPostButton";
import axios from "axios";

const TextArea = styled.textarea`
    white-space: pre-wrap;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    font-size: 16px;
    width: 300px;
    height: 300px;
    text-align: left;
    margin-left: 30px;
    
`;

const PostCreatePage = () => {
    const [title, setTitle] = useState("");
    const [member, setMemeber] = useState();
    const [content, setContent] = useState("");
    const [code, setCode] = useState();
    const [img, setImg] = useState();
    const [category, setCategory] = useState("");
    const [tag, setTag] = useState("");

    const navigate = useNavigate();

    const data = {
        title,
        content,
        category,
        tag,
    }
    const handleAddPost = async () => {

        console.log(data);
        //axios.defaults.headers.post["Content-Type"] = "application/json";
        const token = sessionStorage.getItem("token");
        console.log(token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        axios.post("http://localhost:8080/board/create",
            data
        )
            .then(response => {
                navigate("/");
            })
            .catch(error => {
                alert("에러");
            });
    }

    const handleCategory = (selected) => {
        console.log(selected);
        setCategory(selected);

    }

    const handleTag = (selected) => {
        console.log(selected);
        setTag(selected);
    }

    return(
        <div style={{textAlign: 'center'}}>
            <Header/>
            <h1>
                글 작성
            </h1>

            <div style={{textAlign: 'center', padding: '12px'}}>
                <TitleInput onChange={e => setTitle(e.target.value)}/>
            </div>

            <div style={{margin: '30 px', display: 'flex', justifyContent: 'center'}}>
                <CategoryContainer onSelect={handleCategory}/>
            </div>

            <div style={{margin: '30 px', display: 'flex', justifyContent: 'center'}}>
                <TagContainer onSelect={handleTag}/>
            </div>

            <div style={{margin: '30 px', display: 'flex', justifyContent: 'center'}}>

                <div>
                    <h2>
                        내용
                    </h2>
                    <TextArea
                        placeholder="내용을 입력하세요"
                        onChange={(e => setContent(e.target.value))}
                    />
                </div>

            </div>

            <div style={{margin: '30 px', display: 'flex', justifyContent: 'center'}}>
                <button onClick ={handleAddPost}
                > submit </button>
            </div>

        </div>


    );
};

export default PostCreatePage;