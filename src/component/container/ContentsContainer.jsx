import React from "react";
import styled from "styled-components";

const ContentsContainer = (props) => {
    return (
        <div>
            <h1>{props.postData.category} | {props.postData.title}</h1><br/>
            <div>
                <span>comments : {props.postData.comments} | </span>
                <span>likes : {props.postData.likes}</span>
            </div>
            <h2>{props.postData.author} | {props.postData.date}</h2>
            <h3>
                {props.postData.tags.map((tag, index) => (
                    <span key={index}>{tag} </span>
                ))}
            </h3>
            <h4>{props.postData.content}</h4>

        </div>
    );
};

export default ContentsContainer;