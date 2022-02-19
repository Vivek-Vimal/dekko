import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bgs.png'
import theme from "styled-theming";
import One from './1.png'
import Two from './2.png'
import { motion } from 'framer-motion'
import { T as Tr } from '../Page1/Home'
import { Button } from '../Page1/Home';

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Sec = styled.section`
    min-height: 100%;
    display: flex;
    overflow-x: hidden !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5rem  0 ;
background-color: #ffffff;
    @media only screen and (max-width: 1400px) {
      padding: 3rem 0;
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
        width: 95%;
      }
    @media only screen and (max-width: 1400px) {
        width: 99%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`

const Left = styled.div`
        margin-right: 2rem;
        // display: flex;
        // flex-direction: column;
        justify-content: space-between;
        // width: 50%;
      //   @media only screen and (max-width: 1100px) {
          
      //     width: 95%;
      // }
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-left: 2rem;
     
      width: 50%;
      @media only screen and (max-width: 1400px) {
       
    }
    @media only screen and (max-width: 1100px) {
      flex-direction: row;
      width: 95%;
      justify-content: center;
      margin: 3rem 0 0 0;
  }
      @media only screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-left: 0;
        padding: 0 1rem;
        
      }
`;

export const H = styled.p`
    
    font-size: 2.4rem;
    font-weight: 600;
    text-align: left;
    background: -webkit-linear-gradient(rgba(21, 55, 208, 1), rgba(27, 38, 157, 1));
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
    color: rgba(79, 79, 79, 1);
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 1.1rem;
    }
`;

export const Line = styled.div`
    height: 0.35rem;
    width: 7rem;
    border-radius: 1rem;
    background: linear-gradient(rgba(21, 55, 208, 1), rgba(27, 38, 157, 1));
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


const Page2 = () => {

  return (
    <Sec id="rarity">

      <Width>

        <Left
          data-aos="fade-right"
        >
          <Image1
            initial={{ x: 0, y: 0 }}
            animate={{ x: 0, y: -15 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <img src={One} alt="" style={{ width: "100%", height: "100%" }} />
          </Image1>
        </Left>

        <Right>
          <H>Welcome to Dekka</H>
          <Line />
          <Trr>
              We have the best rates . Simply start your exchange right now. 
              Sign up for our Affiliate program and earn commission from each exchange.
              The earnings are credited in your account instantly and can be withdrawn right away.
              Also note some exchange directions are hidden for unregistered user.
              To ensure to have access to all our exchange directions and benefits kindly sign up and verify your identity.
          </Trr>
          <Button type='button'
            style={{background:'linear-gradient(to right, rgba(21, 55, 208, 1), rgba(27, 38, 157, 1))',color:'#fff'}}          
          >
            Explore
          </Button>
        </Right>


      </Width>
    </Sec>
  )
}

export default Page2
