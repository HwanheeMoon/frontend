import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../section/Header";
import PostHeader from "../section/PostHeader";
import Card from "../container/Card";
import {useNavigate, useParams} from "react-router-dom";

const BoardViewPage = () => { // Use props for board data
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    const [board, setBoards] = useState([]);
    const [counts, setCounts] = useState(0);
    const [newComment, setNewComment] = useState([]);
    const [writer, setWriter] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const getComments = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/comment/board/${id}`);// Use param from props
            setComments(response.data);
            setCounts(response.data.length);
        } catch (error) {
            console.error("Error fetching comments:", error);
            // Handle errors gracefully, e.g., display an error message
        }
    };

    const getBoard = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/board/detail/${id}`); // Use param from props
            setBoards(response.data);
            setWriter(response.data.member.name);
        } catch (error) {
            console.error("Error fetching comments:", error);
            // Handle errors gracefully, e.g., display an error message
        }
    };

    const handleAddComment = async () => {
        const token = localStorage.getItem("token");
        console.log(token);
        if(token) {
            axios.defaults.headers.common['Authorization'] =`Bearer ${token}`;
        }
        if(newComment === null) {
            alert("댓글 내용을 입력해주세요.")
        }
        else {
            await axios.post("http://localhost:8080/comment/comments", newComment);
            navigate(`/board/${id}`);

        }
    }

    useEffect(() => {
        getBoard();
        getComments();
        const token = localStorage.getItem("token");
        if(token) {
            setIsLoggedIn(true);
        }
    }, []); // Empty dependency array ensures fetching only once
    return (
        <div>
            {board && ( // Check for board ID before rendering content
                <div>
                    <Header>
                    </Header>
                        <PostHeader
                            category={board.category}
                            title={board.title} // Assuming title is a string
                            comments={counts}
                            likes={board.bookmark_cnt}
                        />

                        <h3 style={{ padding: '1px 30px'}}> 작성자 : {writer}</h3>
                        <h4 style={{ padding: '1px 30px'}}>작성 일시 :  {board.write_date}</h4>
                        <ul style={{ padding: '8px 30px'}}>{board.content}</ul>

                        <hr />
                        <h2 style={{padding : '1px 30px'}}>댓글</h2>
                        <ul style={{padding : '1px 60px'}}>
                            {comments.map((item) => (
                                <li key = {item.id}>
                                    <Card name = {item.member.name} content = {item.content} CreateDate={item.createDate}></Card>
                                </li>
                            ))}
                        </ul>
                    <div style={{padding : '8px 30px'}}>
                        {isLoggedIn &&
                            <input placeholder="댓글 작성하는 곳" onChange={(e) => setNewComment(e.target.value)}/>}
                        {isLoggedIn &&
                            <button onClick={handleAddComment}>댓글 작성</button>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoardViewPage;
