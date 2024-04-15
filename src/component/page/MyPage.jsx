import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { styled } from "styled-components";

import Header from "../section/Header";
import axios from "axios";

const columns = ['제목', '카테고리', '태그', '좋아요', '작성한 날짜'];
const leftCategory = ['작성한 글', '작성한 댓글'];
const commentCol = ['게시물 제목', '내용', '작성한 날짜']

const StyledContainer = styled.div`
        text-align: center;
        align-items: center;
        margin: 10px 40px;
    `;


const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-top : 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
    thead tr {
        width: auto;
        display: flex;
        margin: 10px 90px;
    }

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
    height: 40px;
    cursor: pointer;
`;




const StyledTableCell = styled.td`
    width: 155px;
    display: -ms-flexbox;
    justify-content: center;
/* 셀 패딩을 유지합니다 */
  text-align: center; /* 기본적으로 내용을 왼쪽에 정렬합니다 */

`;

const StyledTableRow = styled.tr`
    display: flex; /* 셀을 가로로 배치하기 위해 인라인 블록으로 만듭니다 */
    justify-content: right;
    margin: 5px 10px;
    padding: 5px 15px; /* 미관상의 이유로 세로 패딩을 추가합니다 */
    cursor: pointer; /* 사용자에게 클릭 가능한 동작을 나타냅니다 */

`;

const MyPage = () => {
    const [myComments, setMycomments] = useState(null);
    const [myBoards, setMyBoards] = useState([]);
    const [select, setSelect] = useState('board');
    const navigate = useNavigate();
    const [showOption, setShowOption] = useState(false);

    function checkReIssuedToken(response) {
        const accessToken = response.headers['authorization'];
        if(accessToken) {
            sessionStorage.setItem("token", accessToken);
        }
    }

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
            axios.defaults.headers.common['email'] = id;
            const response = await axios.get(`http://localhost:8080/board/list/${id}`)
            checkReIssuedToken(response);
            setMyBoards(sortPostsByDate(response.data));
        }
        else {
            alert("유효하지 않는 토큰");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("id");
            navigate("/");
        }
    }

    const getComments = async () => {
        const token = sessionStorage.getItem("token");
        const id = sessionStorage.getItem("id");
        //console.log(token);
        if (token && id) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.defaults.headers.common['email'] = {id};
            const response = await axios.get(`http://localhost:8080/comment/member/${id}`)
            checkReIssuedToken(response);
            setMycomments(sortCommentsByDate(response.data));
        }
        else {
            alert("유효하지 않는 토큰");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("id");
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

    const handleClickBoard = async (id) => {
        const token = sessionStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.defaults.headers.common['email'] = {id};
            const response = await axios.delete(`http://localhost:8080/board/delete/${id}`)
            checkReIssuedToken(response);
            window.location.reload();
        }
        else {
            alert("유효하지 않는 토큰");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("id");
            navigate("/");
        }
    }

    const handleClickComment = async (id) => {
        const token = sessionStorage.getItem("token");
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.defaults.headers.common['email'] = {id};
            const response = await axios.delete(`http://localhost:8080/comment/comments/${id}`)
            checkReIssuedToken(response);
            window.location.reload();
        }
        else {
            alert("유효하지 않는 토큰");
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("id");
            navigate("/");
        }
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
                {(select === 'board') &&
                    <StyledTable>
                    <thead>
                    <tr>
                        {columns.map((column) => (
                            <th style={{
                                padding: '5px 77px',
                                backgroundColor: 'rgba(181, 200, 255, 0.3)',
                            }}>{column}</th>
                        ))}
                    </tr>
                    </thead>
                    {myBoards.map((board) => (
                        select ? (
                            <>
                                <StyledTableRow>
                                <tbody onClick={() => {navigate(`/board/${board.id}`)}}>
                                <tr>
                                    <StyledTableCell style={{margin : "2px 20px", padding: "5px 20px"}}>{board.title}</StyledTableCell>
                                    <StyledTableCell style={{margin : "2px 20px", padding: "5px 20px"}}>{board.category}</StyledTableCell>
                                    <StyledTableCell style={{margin : "2px 20px", padding: "5px 20px"}}>{board.tag}</StyledTableCell>
                                    <StyledTableCell style={{margin : "2px 20px", padding: "5px 20px"}}>{board.bookmark_cnt}</StyledTableCell>
                                    <StyledTableCell style={{margin : "2px 20px", padding: "5px 20px"}}>{formatDate(board.write_date)}</StyledTableCell>
                                </tr>
                                </tbody>
                                    <StyledButton style={{margin : "10px 20px", height : "30px"}} onClick={e => {alert("hi")}}> 수정 </StyledButton>
                                    <StyledButton style={{margin : "10px 20px", height : "30px"}} onClick={ e => {handleClickBoard(board.id)}}> 삭제 </StyledButton>
                                </StyledTableRow>
                            </>
                        ) : ("작성한 게시물이 없습니다.")))}

                </StyledTable>
                }

                {(select === 'comment') && <StyledTable>
                    <thead>
                    <tr style={{margin : '5px 190px'}}>
                        {commentCol.map((column) => (
                            <th style={{
                                padding: '5px 115px',
                                backgroundColor: 'rgba(181, 200, 255, 0.3)',
                            }}>{column}</th>
                        ))}
                    </tr>
                    </thead>
                    {myComments.map((comment) => (
                        select ? (
                            <>
                                <StyledTableRow>
                                    <tbody onClick={() => {navigate(`/board/${comment.id}`);}}>
                                    <tr>
                                        <StyledTableCell style={{margin : "2px 20px", padding: "5px 80px"}}>{comment.board.title}</StyledTableCell>
                                        <StyledTableCell style={{margin : "2px 20px", padding: "5px 80px"}}>{comment.content}</StyledTableCell>
                                        <StyledTableCell style={{margin : "2px 20px", padding: "5px 80px"}}>{formatDate(comment.createDate)}</StyledTableCell>
                                    </tr>
                                    </tbody>
                                    <StyledButton style={{margin : "10px 20px", height : "30px"}} onClick={e => {handleClickComment(comment.id)}}> 수정 </StyledButton>
                                    <StyledButton style={{margin : "10px 20px", height : "30px"}} onClick={e => {handleClickComment(comment.id)}}> 삭제 </StyledButton>
                                </StyledTableRow>
                            </>
                        ) : ("작성한 게시물이 없습니다.")))}

                </StyledTable>

                }
            </StyledContainer>
        </div>

    );

};

export default MyPage;