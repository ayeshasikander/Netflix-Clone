import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { firebaseAuth } from "../utils/firebase-config";


const TopNav = ({ isScroll }) => {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "TV Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (cureentUser) => {
    if (!cureentUser) navigate("/login");
  });
  return (
    <NavContainer isScroll={isScroll}>
      <nav>
        <div className="left-side">
          <div className="logo">
            <img
              src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png"
              alt="Netflix"
            />
          </div>
          <ul className="links">
            {navlinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right-side">
          <button onClick={()=>signOut(firebaseAuth)}>
          <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    height: 5rem;
    position: fixed;
    z-index: 2;
    width: 100%;
    background-color: ${(props) => (props.isScroll ? "black" : "transparent")};
    transition: 0.5s ease-in-out;
    .left-side {
      display: flex;
      align-items: center;
      gap: 2rem;

      .logo {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        height: 2rem;
        width: 10rem;
      }
    }
    .links {
      display: flex;
      list-style: none;
      gap: 3rem;
      li {
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
  .right-side {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button {
      background-color: red;
      border: none;
      border-radius: 10%;
      padding: 0.4rem 0.6rem;
      
      color: #fff;
      cursor: pointer;
    }&:focus{
        outline: none;
    }svg{
        font-size: 1.5rem;
    }
  }
`;

export default TopNav;
