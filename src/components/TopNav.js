import React from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopNav = ({ isScroll }) => {
    const navlinks = [
        { name: "Home", link: '/' },
        { name: "TV Show", link: '/tv' },
        { name: "My List", link: '/mylist' },
        { name: "Movies", link: '/movies' },
    ]
    return (
        <NavContainer isScroll={isScroll}>
            <nav>
                <div className="left-side">
                    <div className="logo">
                        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265433/NetflixApp/2560px-Netflix_2015_logo.svg_rbicwl_knwp6f.png" alt="Netflix" />
                    </div>
                    <ul className="links">
                        {
                            navlinks.map(({ name, link }) => {
                                return (
                                    <li key={name}>
                                        <Link to={link}>{name}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="right-side">
                    <button>
                        <AiOutlineLogout />
                    </button>
                </div>
            </nav>
        </NavContainer>
    )
}

const NavContainer = styled.div`
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    height: 6rem;
    position: fixed;
    z-index: 2;
    width: 100%;
    background-color: ${props => (props.isScroll ? "black" : "transparent")};
    transition: all 0.5s ease;
}

 
 
`

export default TopNav
