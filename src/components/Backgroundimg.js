import React from 'react';
import styled from 'styled-components';
const Backgroundimg = () => {
    return (
        <BackgroundContain>
            <img src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668265236/NetflixApp/netflix-reuse-official_ntcjl2_wtrhhh.jpg' alt='Loading...' />
        </BackgroundContain>
    )
}

const BackgroundContain = styled.div`
      height: 100vh;
      width: 100vw;
      /* overflow-x:hidden; */
      img{
        height: 100vh;
        width: 100vw;
        object-fit: cover;
      }
`

export default Backgroundimg
