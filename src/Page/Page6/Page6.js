import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
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
import Card from './components/Card';

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Sec = styled.section`
    min-height: 65rem;
    display: flex;
    overflow-x: hidden !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem  0 ;
    background-image: url(${backg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
background-color: #ffffff;
    @media only screen and (max-width: 1400px) {
      padding: 3rem 0;
      background-size: auto 100%;
    // overflow: hidden;
    background-position: right center;
  }
  @media only screen and (max-width: 1100px) {
    padding: 1rem 0;
}
    @media only screen and (max-width: 768px) {
       
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;
export const Width = styled.div`
      width: 1600px;
      display: flex;
        
        align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1700px) {
        width: 99%;
      }
      @media only screen and (max-width: 1200px) {
        width: 99%;
        flex-direction: column;
      }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

const Left = styled.div`
        margin-left: 1rem;
        
        width: 60%;
        display: flex;
        
        align-items: center;
        justify-content: center;
        @media only screen and (max-width: 1200px) {
          width: 70%;
        }
        @media only screen and (max-width: 900px) {
          width: 99%;
        }
    @media only screen and (max-width: 768px) {
        margin:auto;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-right: 1rem;
      margin-left: 3rem;
     
      width: 40%;
      @media only screen and (max-width: 1400px) {
       
    }
    @media only screen and (max-width: 1200px) {
      width: 60%;
    }
    @media only screen and (max-width: 900px) {
      width: 90%;
    }
   
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
    background: -webkit-linear-gradient(#e5e5e5, #ffffff);
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
      width: 35rem;
      height: 27rem;
    //   @media only screen and (max-width: 1400px) {
    //     width: 22rem;
    //     height: 18rem;
    // }
    @media only screen and (max-width: 600px) {
      width: 95%;
      height: auto;
  }
`

const resposive =  {
  0: {
      items: 1,
  },
  
 2200: {
   items: 1,
 }

}

const Page6 = () => {

  return (
    <Sec id="rarity">

      <Width>

        <Right>
          <H>What We Do/Our Project</H>
          <Line />
          <Trr>
          We have the best rates . Simply start your exchange 
          right now. Sign up for our Affiliate program and earn
           commission from each exchange. The earnings are 
           credited in your account instantly and can be 
           withdrawn right away.
          </Trr>
          {/* <Button type='button'
            style={{background:'linear-gradient(to right, rgba(21, 55, 208, 1), rgba(27, 38, 157, 1))',color:'#fff'}}          
          >
            Explore
          </Button> */}
        </Right>

        <Left>
          <AliceCarousel
               // autoPlay={true}
                //  infinite={true}
                animationDuration={1468}
                disableButtonsControls={true}
                disableDotsControls={true}
                // autoPlayStrategy={'none'}
                
                //  paddingLeft={30}
                //  responsive={resposive}
              
            > 
             
              <Card />
            
          </AliceCarousel>
          
        </Left>

      </Width>
    </Sec>
  )
}

export default Page6
