import React from 'react'
import styled from 'styled-components'
import img from './Vector.png'
import Tilt from 'react-parallax-tilt';
import backg from './bg.png'
import theme from "styled-theming";
// import One from './1.png'
// import Two from './2.png'
import { motion } from 'framer-motion'
import { T as Tr } from '../Page1/Home'
import { Button } from '../Page1/Home';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Sec = styled.section`
    min-height: 35rem;
    display: flex;
    overflow-x: hidden !important;
    align-items: center;
    // justify-content: center;
    flex-direction: column;
    padding: 2rem  0 ;
    background-image: url(${backg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
background-color: #ffffff;

    
      @media only screen and (max-width: 1400px) {
        background-size: auto 100%;
        background-position: right  center;
    }
  
  @media only screen and (max-width: 1100px) {
    padding: 1rem 0;
}
    // @media only screen and (max-width: 768px) {
       
    //     padding: 1rem 0 2rem 0;
    //     flex-direction: column;
    //     justify-content: space-around;
    //   }
`;
export const Width = styled.div`
      width: 1300px;
      display: flex;
        
        align-items: center;
        justify-content: space-between;
     
      @media only screen and (max-width: 1400px) {
        width: 85%;
        flex-direction: column;
      }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
    }

`

const Left = styled.div`
        margin-left: 1rem;
        //  background: red;
        min-width: 60%;
        display: flex;
        
        align-items: center;
        justify-content: center;
        @media only screen and (max-width: 1200px) {
          min-width: 70%;
        }
        @media only screen and (max-width: 900px) {
          width: 99%;
        }
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
margin: 2% 0 0 0;
      @media only screen and (max-width: 1400px) {
       
    }
    // @media only screen and (max-width: 1200px) {
    //   width: 60%;
    // }
    // @media only screen and (max-width: 900px) {
    //   width: 90%;
    // }
   
      @media only screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-left: 0;
        padding: 0 1rem;
        
      }
`;

const H = styled.p`
    
    font-size: 2.4rem;
    font-weight: 600;
    text-align: left;
    max-width: 998px;
    background: -webkit-linear-gradient(#000000, #434343);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0 0 0.7rem 0;

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.8rem;
    }
    
`;

export const Trr = styled(Tr)`
    font-size: 1.4rem;
    color: #e5e5e5;
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 1.1rem;
    }
`;

const Line = styled.div`
    height: 0.35rem;
    width: 7rem;
    border-radius: 1rem;
    background: #e5e5e5;
    margin: 0 0 0.7rem 0;
`


const Image1 = styled(motion.div)`
      width: 4.5rem;
      height: 4rem;

   
`

const resposive =  {
  0: {
      items: 1,
  },
  
  1000:{
      items: 1,
  },

}

const Comment = () => {

  return (
    <Sec id="rarity">

      <Width>

        <Right>
          <Image1>
            <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
          </Image1>
          <H>Solid time blocks, free from distractions and interruptions, so that you can focus and do your best work.</H>
          
        </Right>

      </Width>
    </Sec>
  )
}

export default Comment
