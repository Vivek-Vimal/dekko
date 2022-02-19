import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './bg.png'
import theme from "styled-theming";
import e from './E.png'
import le from './img.png'
import { Trr } from '../Page2/Page2';
import { H } from '../Page1/Home';

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Sec = styled.section`
    min-height: 35rem;
    display: flex;
    overflow-x: hidden !important;
    align-items: center;
     justify-content: center;
 
    padding: 0 0 3rem 0;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    @media only screen and (max-width: 1400px) {
      padding: 3rem 2rem;
  }
    @media only screen and (max-width: 768px) {
       
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;
export const Width = styled.div`
      width: 1400px;
      display: flex;
   
      align-items: center;
      justify-content: space-between;
      
      @media only screen and (max-width: 1500px) {
        width: 85%;
        justify-content: space-between;
    }
    @media only screen and (max-width: 1300px) {
      width: 95%;
      justify-content: space-between;
  }
 
    
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }

`

const Left = styled.div`
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 35rem;
        margin: -4rem 0 0 0;
        @media only screen and (max-width: 1100px) {
          
          width: 32rem;
          margin: 0;
      }
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled(Tilt)`
      // margin: 6rem 0 0 2rem;
   
      margin-right: 2rem;
      width: 40%;
      
   
      @media only screen and (max-width: 768px) {
        width: 90%;
        height: auto;
        margin-left: 0;
        padding: 0 1rem;
        flex-direction: column;
      }
`;


const Heading = styled(H)`
  @media only screen and (max-width: 1300px) {
    font-size: 2rem;
     font-weight: 600;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
     font-weight: 550;
  }
`

const Page2 = () => {

  return (
    <Sec id="rarity">

      <Width>

      <Right>

        <img src={le} alt="" style={{ width: "100%", height: "100%" }} />

      </Right>

        <Left>

          <Heading style={{lineHeight:'1.5'}}>
            Built to keep up with the demands of your growing company<span style={{color:'red'}}>.</span>
          </Heading>

        </Left>

      </Width>
    </Sec>
  )
}

export default Page2
