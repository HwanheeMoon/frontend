import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

import Header from "../section/Header";

import KakaoButton from "../button/KakaoButton";
import GoogleButton from "../button/GoogleButton";



const JoinPage = () => {

    return(
        <div>
            <Header />
            <div style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '150px'}}>
                
                <h1 style={{color: 'gray', fontWeight: 'normal', marginBottom: '50px'}}>간편회원가입</h1>

                <div style={{ display: 'flex', justifyContent: 'center', width: '280px', alignItems: 'center'}}>
                    <KakaoButton
                        imageSrc={require("../../images/kakao_signup.png")} 
                        alt="카카오버튼 이미지" 
                        width="280px"
                        height= "62px"
                        onClick={() => console.log('버튼 클릭됨')}// 버튼이 클릭될 때 실행될 함수를 지정
                    />

                    <div style={{ marginRight: '30px' }}></div> 
                    
                    <GoogleButton
                        imageSrc={require("../../images/google_signup.png")}
                        alt="구글버튼 이미지" 
                        width="280px"
                        height= "62px"
                        onClick={() => console.log('버튼 클릭됨')}
                    />
                </div>
            </div>
        </div>
    );
};

export default JoinPage;