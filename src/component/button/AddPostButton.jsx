import {styled} from "styled-components";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const StyledButton = styled.button`
    background-color: #EFF3FD;
    color: #3563E9;
    padding: 8px 20px;
    border: 1px solid blue;
    border-radius: 8px;
    width: 85px;
    height: 40px;
    cursor: pointer;
`;

const AddPostButton = (boardDTO) => {
    const {title, content, category, tag} = boardDTO;
    const navigate = useNavigate();

    const data = {
        title,
        content,
        category,
        tag,
    }



    return (
        <StyledButton>
            submit
        </StyledButton>
    );
}

export default AddPostButton;