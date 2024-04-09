import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import LoginButton from '../button/LoginButton';
import SignupButton from '../button/SignupButton';
import {useEffect} from "react";
import LogoutButton from "../button/LogoutButton";
import MyPageButton from "../button/MyPageButton";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: white; 
  border-bottom: 1px solid #CCCCCC;
`;

const Logo = styled.h1`
  margin: 0px;
  margin-left: 20px;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const LogoLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect( () => {
        const token = sessionStorage.getItem("token");
        if(token) {
            setIsLoggedIn(true);
        }
    }, [])

    return (
      <HeaderContainer>
        <LogoLink to='/'>
            <Logo>Code Review</Logo>
        </LogoLink>
          <ButtonContainer>

              {!isLoggedIn && <SignupButton/>}
              {isLoggedIn && <MyPageButton/>}
              {isLoggedIn && <LogoutButton/>}


          </ButtonContainer>
      </HeaderContainer>
    );
  };
  
export default Header;