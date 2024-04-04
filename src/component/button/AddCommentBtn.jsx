import React, {useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const AddCommentBtn = () => {
    const [comment, setComment] = useState(null);
    const {id} = useParams();
    const navigate = useNavigate();
    const handleAddComment = () => {
        if (comment === null) {
            alert("댓글을 입력하십시오.")
        }
        else {
            const token = localStorage.getItem("token");
            axios.defaults.headers.post["Content-Type"] = "application/json";
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.post(`http://localhost:8080/comment/board/${id}`, comment);
            window.location.reload();
        }
    }


    return (
        <div>
        <input placeholder="댓글 작성하는 곳" onChange={(e) => setComment((e.target.value))}/>
        <button onClick={handleAddComment}>댓글 작성</button>
        </div>
    )

}

export default AddCommentBtn;