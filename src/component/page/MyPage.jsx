import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { styled } from "styled-components";

import Header from "../section/Header";
import axios from "axios";

const columns = ['제목', '카테고리', '태그', '좋아요', '작성한 날짜'];
const leftCategory = ['작성한 글', '작성한 댓글'];
const commentCol = ['게시물 제목', '내용', '작성한 날짜']

const StyledContainer = styled.div`
        display: flex;
        text-align: center;
        align-items: center;
        margin: 20px 90px;
    `;


const StyledTable = styled.table`
    width: 95%;
    border-collapse: collapse;
    border-bottom: 1px solid #dddddd;

    tbody tr:hover {
        background-color: #f5f5f5;
        cursor: pointer;
        
    }
`;

const StyledButton = styled.button`
    background-color: rgba(181, 200, 255, 0.3);
    color:#2851E3;
    font-size: 16px;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    min-width: 93px;
    height: 35px;
    cursor: pointer;
`;



const MyPage = () => {
    const [myComments, setMycomments] = useState(null);
    const [myBoards, setMyBoards] = useState([]);
    const [select, setSelect] = useState('board');
    const navigate = useNavigate();

    const sortPostsByDate = (reviews) => {
        return reviews.sort((a, b) => {
            return new Date(b.write_date) - new Date(a.write_date);
        });
    };

    const sortCommentsByDate = (reviews) => {
        return reviews.sort((a, b) => {
            return new Date(b.createDate) - new Date(a.createDate);
        });
    };
    const getBoards = async () => {
        const token = sessionStorage.getItem("token");
        const id = sessionStorage.getItem("id");
        //console.log(token);
        if (token && id) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.get(`http://localhost:8080/board/list/${id}`)
            setMyBoards(sortPostsByDate(response.data));
        }
        else {
            alert("유효하지 않는 토큰");
            sessionStorage.removeItem("token");
            navigate("/");
        }
    }

    const getComments = async () => {
        const token = sessionStorage.getItem("token");
        const id = sessionStorage.getItem("id");
        //console.log(token);
        if (token && id) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const response = await axios.get(`http://localhost:8080/comment/member/${id}`)
            setMycomments(sortCommentsByDate(response.data));
        }
        else {
            alert("유효하지 않는 토큰");
            sessionStorage.removeItem("token");
            navigate("/");
        }
    }


    useEffect(() => {
        getBoards();
        getComments();
    }, []);

    console.log(myBoards);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 0부터 시작하기 때문에 1을 더해야 함
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
    }

    const handleClickBoard = (id) => {
        navigate(`/board/${id}`);
    }

    return(
        <div>

            <Header/>
            <h1 style={{textAlign : 'center'}}>
                MyPage
            </h1>
            <div style={{margin: '10px', textAlign: 'center'}}>
                <StyledButton onClick={e => setSelect("board")} style={{margin: '20px'}}>작성한 글</StyledButton>
                <StyledButton onClick={e => setSelect("comment")} style={{margin: '20px'}}>작성한 댓글</StyledButton>
            </div>
            <StyledContainer>
                {(select === 'board') &&  <StyledTable>
                    <thead>
                    <tr>
                        {columns.map((column) => (
                            <th style={{
                                padding: '5px 60px',
                                backgroundColor: 'rgba(181, 200, 255, 0.3)',
                            }}>{column}</th>
                        ))}
                    </tr>
                    </thead>
                    {myBoards.map((board) => (myBoards ?
                        (<tbody>
                                <tr onClick={() => {handleClickBoard(board.id)}}>
                                    <td style={{padding: '5px 20px'}}>{board.title}</td>
                                    <td style={{padding: '5px 20px'}}>{board.category}</td>
                                    <td style={{padding: '5px 20px'}}>{board.tag}</td>
                                    <td style={{padding: '5px 20px'}}>{board.bookmark_cnt}</td>
                                    <td style={{padding: '5px 20px'}}>{formatDate(board.write_date)}</td>
                                </tr>
                        </tbody>) : "작성한 게시물이 없습니다."
                    ))}
                </StyledTable>}

                {(select === 'comment') && <StyledTable>
                    <thead>
                    <tr>
                        {commentCol.map((column) => (
                            <th style={{
                                padding: '5px 60px',
                                backgroundColor: 'rgba(181, 200, 255, 0.3)',
                            }}>{column}</th>
                        ))}
                    </tr>
                    </thead>
                    {myComments && myComments.map((comment) => (
                        <tbody>
                        <tr onClick={() => {handleClickBoard(comment.board.id)}}>
                            <td style={{padding: '5px 20px'}}>{comment.board.title}</td>
                            <td style={{padding: '5px 20px'}}>{comment.content}</td>
                            <td style={{padding: '5px 20px'}}>{formatDate(comment.createDate)}</td>
                        </tr>

                        </tbody>
                    ))}
                </StyledTable>

                }
            </StyledContainer>
        </div>

    );

};

export default MyPage;