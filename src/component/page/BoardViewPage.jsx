import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../section/Header";
import PostHeader from "../section/PostHeader";
import Card from "../container/Card";
import {useNavigate, useParams} from "react-router-dom";
import AddCommentBtn from "../button/AddCommentBtn";

const BoardViewPage = () => { // Use props for board data
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    const [board, setBoards] = useState([]);
    const [counts, setCounts] = useState(0);
    const [newComment, setNewComment] = useState([]);
    const [writer, setWriter] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 0부터 시작하기 때문에 1을 더해야 함
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
    }

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


    useEffect(() => {
        getBoard();
        getComments();

        const token = sessionStorage.getItem("token");
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
                        <h4 style={{ padding: '1px 30px'}}>작성 일시 :  {formatDate(board.write_date)}</h4>
                        <ul style={{ padding: '8px 30px'}}>{(board.content || "").split('\n').map(line => {
                            return (
                                <>
                                    {line}
                                    <br />
                                </>
                            );
                        })}</ul>

                        <hr />
                        <h2 style={{padding : '1px 30px'}}>댓글</h2>

                        <ul style={{padding : '1px 60px'}}>
                            {comments.map((item) => (
                                <li key = {item.id}>
                                    <Card name = {item.member.name} content = {item.content} CreateDate={formatDate(item.createDate)}></Card>
                                </li>
                            ))}
                        </ul>

                    <div style={{padding : '8px 30px'}}>
                        {isLoggedIn &&
                            <AddCommentBtn>
                        </AddCommentBtn>}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BoardViewPage;
