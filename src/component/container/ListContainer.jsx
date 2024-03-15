import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from "styled-components";
import { fetchData } from '../../dummydata';

const columns = ['제목', '카테고리', '태그', '작성자', '댓글', '좋아요', '날짜'];
const itemsPerPage = 5;

function ListContainer(props) {

    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCategory, setCurrentCategory] = useState(1)

    useEffect(() => {
        const sampleData = fetchData();
        
        setReviews(sampleData);
    }, [props.category]);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = reviews.slice(firstIndex, lastIndex);

    const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 50px;
    `;

    const StyledPageNumbers = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    justify-content: center;
    `;

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

    const navigate = useNavigate();

    const handleCellClick = (id) => {
        navigate(`/board?id=${id}`);
    };

    return (
        <div>
            <StyledContainer>
                <table style={{ width: '100%', borderCollapse: 'collapse', borderBottom: '1px solid #dddddd' }}>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index} style={{ padding: '10px', textAlign: 'center', backgroundColor: 'rgba(181, 200, 255, 0.3)' }}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item, index) => (
                            <tr key={index} onClick={() => handleCellClick(item.id)}>
                                <td style={{ padding: '8px' }}>{item.title}</td>
                                <td style={{ padding: '8px' }}>{item.category}</td>
                                <td style={{ padding: '8px' }}>{item.tags}</td>
                                <td style={{ padding: '8px' }}>{item.writer}</td>
                                <td style={{ padding: '8px' }}>{item.comments}</td>
                                <td style={{ padding: '8px' }}>{item.likes}</td>
                                <td style={{ padding: '8px' }}>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
