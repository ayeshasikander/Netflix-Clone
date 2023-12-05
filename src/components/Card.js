import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
const Card = () => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    return (
        <CardContaniner
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU" alt="movie" onClick={() => navigate("/player")} />

            {hovered && (
                <div className="hover">
                    <div className="wrapper-video-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU" alt="movie" onClick={() => navigate("/player")} />
                        <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4' autoPlay loop controls muted></video>

                    </div>
                    <div className="info-section">
                        <h1 className='movieName' onClick={() => navigate("/player")}>red notice</h1>

                        <div className="icons">
                            <div className="controls">
                                <IoPlayCircleSharp className='icon' title='play' onClick={() => navigate("/player")} />
                                <RiThumbUpFill className='icon' title='like' />
                                <RiThumbDownFill className='icon' title='dislike' />
                                <BsCheck className='icon' title='Remove from list' />
                                <AiOutlinePlus className='icon' title='Add to my list' />

                            </div>

                            <div className="info">
                                <BiChevronDown className='icon' title='more info' />
                            </div>
                        </div>
                        <div className="genre">
                            <ul>
                                <li>Action</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </CardContaniner>
    )
}

const CardContaniner = styled.div`
/* max-width: 230px; */
background-color: red;

`
export default Card
