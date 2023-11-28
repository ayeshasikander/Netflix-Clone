import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png" alt="Netflix" />
      </div>
      <div className="login">
        <button onClick={}>Login</button>  
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer=styled.div`

`
export default Header
