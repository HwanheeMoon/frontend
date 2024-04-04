import React, { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { styled } from "styled-components";
import axios from "axios";
import BoardViewPage from "../page/BoardViewPage";

const columns = ['제목', '카테고리', '태그', '작성자', '좋아요', '날짜'];
const itemsPerPage = 10;

function ListContainer(props) {

    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState(1)
    const navigate = useNavigate();
    const getList = async () => {
        const response = await axios.get("http://localhost:8080/board/list");
        setReviews(response.data);
        console.log(response.data);
    };

    useEffect(() => {getList()},[]);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = reviews.slice(firstIndex, lastIndex);

    const StyledContainer = styled.div`
        display: flex;
        align-items: center;
        margin: 20px 90px;
    `;

    const StyledPageNumbers = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    justify-content: center;
    `;

    const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-bottom: 1px solid #dddddd;

    tbody tr:hover {
        background-color: #f5f5f5;
        cursor: pointer;
        
    }
`;

    const handleCellClick = (id) => {
        navigate(`/board/${id}`);
    };

    const PageButton = styled.button`
        margin: 0 5px;
        padding: 5px 10px;
        background-color: ${props => props.selected ? '#2980b9' : 'white'};
        color: ${props => props.selected ? 'white' : (props.number === currentPage ? 'blue' : 'black')};
        border: none;
        cursor: pointer;
        &:focus {
            outline: none;
        }
    `;


    return (
        <div>
            <StyledContainer>
                <StyledTable>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} style={{ padding: '10px', textAlign: 'center', backgroundColor: 'rgba(181, 200, 255, 0.3)' }}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((board) => (
                        <tr key = {board} onClick={() => handleCellClick(board.id)}>
                                <td style={{ padding: '8px 70px'}}>{board.title}</td>
                                <td style={{ padding: '8px 70px'}}>{board.category}</td>
                                <td style={{ padding: '8px 70px' }}>{board.tag}</td>
                                <td style={{ padding: '8px 70px' }}>{board.member.name}</td>
                                <td style={{ padding: '8px 70px' }}>{board.bookmark_cnt}</td>
                                <td style={{ padding: '8px 70px' }}>{board.write_date}</td>
                        </tr>
                        ))}
                    </tbody>
                </StyledTable>
            </StyledContainer>
            <StyledPageNumbers>
                {Array.from({ length: Math.ceil(reviews.length / itemsPerPage) }, (_, index) => (
                    <PageButton key={index} number={index + 1} selected={currentPage === index + 1} onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                    </PageButton>
                ))}
            </StyledPageNumbers>
        </div>
    );

}

export default ListContainer;
