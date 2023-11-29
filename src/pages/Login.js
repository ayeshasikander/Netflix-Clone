import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Backgroundimg from '../components/Backgroundimg';
const Login = () => {
  return (
    <Wrapper>
      <Backgroundimg />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>login</h1>
            </div>
            <div className="container">
              <input type="text" placeholder='email' />
              <input type="password" placeholder='password' />
              <button>Login</button>
            </div>
          </div> 
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
.loginContent{
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  grid-template-columns: 15vh 85vh;
  .form-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 85vh;
  }
  .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: rgba(0, 0, 0, 0.887);
    height: 75vh;
    padding: 2rem;
    border-radius: 0.4rem;
     color: #fff;
  }
  .container{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input{
      padding: 0.5rem 1rem;
      width: 25rem;
      height: 3.4rem;
      border-radius: 0.4rem;
      outline: none;
    }
    button{
      cursor: pointer;
      padding: 0.5rem;
      background-color: #D91921;
      border: none;
      border-radius: 0.4rem;
      height: 3.1rem;
      color: #fff;
      font-size: 1.05rem;
      font-weight: bolder;
    }
  }

  

}

`
export default Login
