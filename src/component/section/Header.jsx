import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import LoginButton from '../button/LoginButton';
import SignupButton from '../button/SignupButton';

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
    return (
      <HeaderContainer>
        <LogoLink to='/'>
            <Logo>Code Review</Logo>
        </LogoLink>
          <ButtonContainer>
             
              <SignupButton />
              <LoginButton />
          </ButtonContainer>
      </HeaderContainer>
    );
  };
  
export default Header;