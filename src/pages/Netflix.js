import React, { useState } from 'react';
// import styled from 'styled-components';
import TopNav from '../components/TopNav';
const Netflix = () => {
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = () => {
    setIsScroll(window.pageYOffset === 0 ? false : true)
    return () => {
      window.onscroll = null
    }
  }
  // console.log(isScroll)
  return (
   
      <div className='hero'>
        <TopNav isScroll={isScroll}/>
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg" alt="" style={{width:"100%"}}/>
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg" alt="" style={{width:"100%"}}/>
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg" alt="" style={{width:"100%"}}/>
       </div>
    
  )
}



export default Netflix
