import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Header = (props) => {


  const navigate=useNavigate()

  return (
    <HeaderContainer>
      <div className="logo">
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png" alt="Netflix" />
      </div>
      <div className="login">
        <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>{props.login ? 'Log In' : 'Sign In'}</button>  
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    .logo{
      img{
        height: 3rem;
        cursor: pointer;
      }

    }
    button{
      padding: 0.5rem;
      background-color: #D91921;
      border: none;
      cursor: pointer;
      color: #fff;
      border-radius: 0.2rem;
      font-size: 1.05rem;
      font-weight: bolder;

    }
`
export default Header
