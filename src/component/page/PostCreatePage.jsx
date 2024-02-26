import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Header from "../section/Header";
import CategoryContainer from "../container/CategoryContainer";

const PostCreatePage = () => {



    return(
        <div style={{textAlign: 'center'}}>
            <Header />
            <h2>
                글 작성
            </h2>
            <CategoryContainer />
        </div>
        
    );
};

export default PostCreatePage;