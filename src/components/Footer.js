import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="wrapper">
        <div className="bg-color">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="Netflix"
            />
          </div>
        </div>

      </div>
      <p>Created by: <span><a href="https://github.com/ayeshasikander"> Ayesha.S</a></span></p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
p{
  color: #a7a0a0;
  font-size: 16px;
  display: flex;
  justify-content: center;
}
span{
  a{
    text-decoration: none;
    color: #be191e9b;
    font-size: 18px;
  }
  margin-left: 0.8rem;
}
  .wrapper {
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    .bg-color {
      background-color: #000000;
      width: 50%;
      display: flex;
    justify-content: center;
      border-top: 0.2rem solid #d91921;
      .logo {
        img {
          height: 90px;
          width: 300px;
          margin: 50px 40px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Footer;
