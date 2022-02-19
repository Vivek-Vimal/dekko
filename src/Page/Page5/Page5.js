import React from 'react'
import styled from 'styled-components'
import img from '../../components/Navbar/logo.png'
import Tilt from 'react-parallax-tilt';
import bg from './wall.png'
import e from './E.png'
import theme from "styled-theming";
import one from './1.png'
import two from './2.png'
import three from './3.png'
import four from './4.png'
import five from './5.png'
import six from './6.png'
import seven from './7.png'
import eight from './8.png'
import main from './main.png'
import { Trr } from '../Page2/Page2'

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Sec = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
    justify-content: center;
    overflow-x: hidden !important;
    background-color: #36454F;
    background-image: url(${bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    @media only screen and (max-width: 768px) {
       
        padding: 1rem 0 2rem 0;
        background-size: auto 100%;
        
      }
`;

const Width = styled.div`
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
    @media only screen and (max-width: 768px) {
      width: 100%;
    }

`

const Left = styled.div`
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      
    @media only screen and (max-width: 768px) {
        margin-right: 0;
         width: 100%;
        padding: 0 1rem;
        height: auto;
        align-items: center;
      }
`;

const Right = styled.div`
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    
  @media only screen and (max-width: 768px) {
      margin-left: 0;
      width: 100%;
      padding: 0 1rem;
      height: auto;
      align-items: center;
    }
`;

const Main = styled.div`
      width: 30rem;
      @media only screen and (max-width: 1700px) {
        width: 30rem;
      }
      @media only screen and (max-width: 1400px) {
        margin: 2rem 0;
      }
      @media only screen and (max-width: 600px) {
        width: 90%;
      }
`

export const T = styled.p`
    color: #E5E5E5;
    font-weight: 500;
    font-size: 1.3rem;
    margin: 2rem 0;
    text-align: center;
    line-height: 1.6;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;

const H = styled.h1`
    color: #E5E5E5;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Image = styled.div`
      width: 20rem;
      position: relative;
    display: flex;
    
    align-items: center;
    justify-content: center;
`
const SmallImg = styled.div`
      width: 15.5rem;
      @media only screen and (max-width: 1700px) {
        width: 13.5rem;
      }
      @media only screen and (max-width: 768px) {
        width: 45%;
      }
`

const Flex = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width: 1400px) {
        flex-direction: column;
        align-items: center;
      }
`
const Row = styled.div`
      display: flex;
      @media only screen and (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
      }
`
const Margin = styled.div`
      margin: 0 0 3rem 0;
`
const MarginS = styled.div`
      margin: 0.5rem 0;
`

const Page5 = () => {

  return (
    <Sec>
      <Width>
        <Image>
          <Trr>DETAILS</Trr>
          <img src={e} alt="" style={{ width: "100%", height: "100%" }} />
        </Image>
        <T>
          Each Dekko Hero is unique and programmatically generated from over 170 possible traits, including clothings,headwear,expressions, and more. There are few Dekko Heroes that have very rare traits. These are called SuperPowers.
        </T>
        <Margin />
        <Flex>
          <Left
            data-aos="fade-right"
          >
            <Row>
              <SmallImg>
                <img src={one} alt="" style={{ width: "100%", height: "100%" }} />
              </SmallImg>
              <SmallImg>
                <img src={two} alt="" style={{ width: "100%", height: "100%" }} />
              </SmallImg>
            </Row>
            <MarginS />
            <Row>
              <SmallImg>
                <img src={three} alt="" style={{ width: "100%", height: "100%" }} />
              </SmallImg>
              <SmallImg>
                <img src={four} alt="" style={{ width: "100%", height: "100%" }} />
              </SmallImg>
            </Row>
          </Left>
          <Main>
            <img src={main} alt="" style={{ width: "100%", height: "100%" }} />
          </Main>
          <Right
            data-aos="fade-left"
          >
            <Row>
              <SmallImg>
                <img src={five} alt="" style={{ width: "100%", height: "100%" }} />
              </SmallImg>
              <SmallImg>
                <img src={six} alt="" style={{ width: "100%", height: "100%" }} />
              </SmallImg>
            </Row>
            <MarginS />
            <Row>
              <SmallImg>
                <img src={seven} alt="" style={{ width: "100%", height: "100%" }} />
              </SmallImg>
              <SmallImg>
                <img src={eight} alt="" style={{ width: "100%", height: "100%" }} />
              </SmallImg>
            </Row>
          </Right>
        </Flex>
        <Margin />
        {/* <T>
          To access the Membership Area, Dekko Hero holders will need to be signed into their MetaMask Account
        </T> */}
      </Width>
    </Sec>
  )
}

export default Page5
