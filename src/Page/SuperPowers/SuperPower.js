import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from '../Page6a/bg.png'
import theme from "styled-theming";
import team from '../Page6a/team.png';
import { H,Trr, Line } from '../Page2/Page2'
import e from './E.png'
// import SmallCard from './SmallCard';

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Sec = styled.section`
    min-height: 55rem;
    display: flex;
    overflow-x: hidden !important;
    align-items: center;
    justify-content: center;
    flex-direction: center;
    padding: 3rem 0;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  background-color: #ffffff;
      padding: 3rem 2rem;
  
      @media only screen and (max-width: 1400px) {
        background-size: auto 100%;
        background-position: center  center;
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
    //   flex-direction: column;
    //     align-items: center;
        justify-content: space-between;
      @media only screen and (max-width: 1700px) {
        width: 95%;
      }
    @media only screen and (max-width: 1400px) {
        width: 99%;
    }
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }

`

const Left = styled(Tilt)`
        margin-right: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40rem;
        height: 28rem;
        position: relative;
        @media only screen and (max-width: 1600px) {
          
            width: 35rem;
            height: 25rem;
        }
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
      margin-left: 1rem;

      width: 50%;
    
    @media only screen and (max-width: 1200px) {
        margin: 3rem 0 0 0;
      width: 80%;
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
  @media only screen and (max-width: 1000px) {
    width: 95%;
    height: auto;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
}
`
const SuperPower = () => {

  return (
    <Sec id="rarity">

      <Width>


          

          <Left>

            <img src={team} alt="" style={{ width: "100%", height: "100%" }} />

          </Left>

          <Right>
            <H>Life With Dekka</H>
            <Line />
            <Trr>
                It is only a matter of time before your organization
                 onboards digital assets into your operations. 
                 In the interest of security, you will be managing 
                 your digital assets with a hardware solution. 
                 Will you be passing on your hardware to your Finance 
                 department to receive and perform transactions? 
                 If yes, do you have a fool-proof policy management
                  of who can or cannot be effecting transactions? 
                  What limits do they have?

​                   <div style={{height:'3rem'}} />

                With Dekka, you will be able to seamlessly allow a
                unified transaction framework, from transaction
                 proposers, approvers, executors, transaction limits
                  down to a full and transparent transaction history 
                  - you will never need to worry about who does what.
                   It just works.
            </Trr>
          </Right>


        {/* <Grid>
          <SmallCard />
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </Grid> */}
      </Width>
    </Sec>
  )
}

export default SuperPower
