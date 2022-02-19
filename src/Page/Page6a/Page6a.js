import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './2.png'
import theme from "styled-theming";
import backg from './bg.png'
import team from './team.png';
import { H,Trr, Line } from '../Page2/Page2'
import e from './E.png'
import SmallCard from './SmallCard';

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Sec = styled.section`
    min-height: 60rem;
    display: flex;
    overflow-x: hidden !important;
    align-items: center;
    justify-content: center;
    flex-direction: center;
    
    background-image: url(${backg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  background-color: #ffffff;
      padding: 3rem 2rem 5rem 2rem;

      @media only screen and (max-width: 1400px) {
        
        background-size: auto 100%;
      // overflow: hidden;
      background-position: right center;
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
      flex-direction: column;
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
    }

`

const Left = styled(Tilt)`
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40%;
        position: relative;
        @media only screen and (max-width: 1100px) {
          
          width: 30rem;
      }
    @media only screen and (max-width: 768px) {
        margin-right: 0;
        width: 100%;
        padding: 0 1rem;
        height: auto;
      }
`;

const Right = styled.div`
      margin-right: 2rem;

      width: 35rem;
    
    @media only screen and (max-width: 1100px) {
        margin: 4rem 0 0 0;
      width: 95%;
      justify-content: center;
  }
      @media only screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        margin-left: 0;
        padding: 0 1rem;
        flex-direction: column;
      }
`;



const Upper = styled.div`
      width: 100%;
      display: flex;
        
      align-items: center;
      justify-content: space-between;

      
    @media only screen and (max-width: 1400px) {
        width: 99%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
      @media only screen and (max-width: 768px) {
       
      }
`

const Image1 = styled.div`
      width: 30rem;
      position: relative;
    display: flex;
    
    align-items: center;
    justify-content: center;
      @media only screen and (max-width: 1400px) {
        width: 22rem;
        
    }
    @media only screen and (max-width: 600px) {
      width: 95%;
      height: auto;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
  place-items: center;
  width: 100%;
  margin: 3rem 0 0 0;
  @media only screen and (max-width: 1000px) {
    width: 95%;
    height: auto;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
}
@media only screen and (max-width: 510px) {
  width: 95%;
  height: auto;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
}
`
const Page6a = () => {

  return (
    <Sec id="rarity">

      <Width>

        <Upper>
          <Right>
            <H>Features Just Peyme Has</H>
            <Line />
            <Trr>
            When the life too much things you need more than you have.
             Let’s Peyme 
            help your life to easier with smart payment system
            </Trr>
          </Right>

          <Left>

            <img src={team} alt="" style={{ width: "100%", height: "100%" }} />

          </Left>


        </Upper>
        <Grid>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </Grid>
      </Width>
    </Sec>
  )
}

export default Page6a
