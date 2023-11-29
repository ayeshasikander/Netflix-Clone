import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Backgroundimg from '../components/Backgroundimg';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Container>
      <Backgroundimg />
      <div className='content'>
        <Header login />
        <div className='body'>
          <div className='text'>
            <h1>
              Unlimited Movies, Tv Shows and more.
            </h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
          </div>
          <div className='form'>
            {
              showPassword ? (
                <input type='password' placeholder='password' name='password' />
              ) : <input type='email' placeholder='email address' name='email' />
            }
            {
              !showPassword ? (
                <button onClick={() => setShowPassword(true)}>Get Started</button>
              ) : <button>Sign Up</button>
            }



          </div>
        </div>
      </div>
    </Container>
  )
}
const Container = styled.div`
position: relative;
.content{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
  .body{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.text{
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
}
h1{
  padding: 0 25rem;
}
h4{
  margin-top: 1rem;
}
h6{
  margin-top: 0.9rem;
}
}
.form{
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: ${({showPassword})=>showPassword?"1fr 1fr":"2fr 1fr"};
  width: 60%;
  input{
    color: black;
    padding: 1.2rem;
    font-size: 1.2rem;
    width: 45rem;
    &:focus{
      outline: none;
    }
  }
  button{
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    /* margin-top: 1rem; */
    width: 45rem;
    color: #fff;
    cursor: pointer;
    font-size: 1.05rem;
    width: 10rem;
    background-color: #D91921;
    border: none;
    
  }
}

`

export default SignUp
