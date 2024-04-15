import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import { styled } from "styled-components";

import Header from "../section/Header";

import KakaoButton from "../button/KakaoButton";
import GoogleButton from "../button/GoogleButton";
import axios from "axios";



const JoinPage = () => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const location = useLocation();

    const handleGoogle = async () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    }

    const handleKakao = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/kakao';
    };

    return(
        <div>
            <Header />
            <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '150px'}}>
                
                <h1 style={{color: 'gray', fontWeight: 'normal', marginBottom: '50px'}}>간편 로그인</h1>

                <div style={{ display: 'flex', justifyContent: 'center', width: '280px', alignItems: 'center'}}>



                    <div style={{ marginRight: '30px' }}></div>
                    
                    <GoogleButton
                        imageSrc={require("../../images/google_signup.png")}
                        alt="구글버튼 이미지" 
                        width="280px"
                        height= "62px"
                        onClick={handleGoogle}
                    />
                </div>
            </div>
        </div>
    );
};

export default JoinPage;