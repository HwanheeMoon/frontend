import {styled} from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-bottom: 1px solid #dddddd;

    tbody tr:hover {
        background-color: #f5f5f5;
        cursor: pointer;
        
    }
`;


const Card = ({name, content, CreateDate}) => {
    return (
        <div className="card">
            <StyledTable>
                <h4> {name} </h4>
                <td> {content}</td>
                <td> {CreateDate}</td>
            </StyledTable>
        </div>
    )
}

export default Card;