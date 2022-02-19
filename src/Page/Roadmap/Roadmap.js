import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import backg from './rd.png'
import Gallery from './Components/Gallery'

const HomePage = styled.section`
  display: flex;
  overflow-x: hidden !important;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-image: url(${backg});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media only screen and (max-width: 1400px) {
    background-size: auto 100%;
    background-position: center  center;
}

@media only screen and (max-width: 768px) {
    min-height: 50rem;
    width: 100%;
    padding: 0rem 0.5rem 2rem 0.5rem;
    background-size: auto 100%;
    flex-direction: column;
}`;

const Width  = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
  
    @media only screen and (max-width: 1400px) {
        width: 96%;
        justify-content: space-between;
    }
    @media only screen and (max-width: 1000px) {
        width: 99%;
       
    }
    @media only screen and (max-width: 800px) {
        width: 99%;
        flex-direction: column;
        margin: 10rem  0 0 0;
    }
    @media only screen and (max-width: 600px) {
        width: 99%;
        
        margin: 5rem  0 0 0;
    }
`

const T = styled.p`
    color: #000000 ;
    font-weight: 500;
    font-size: 1.40rem;
    margin-bottom: 2rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const Mobile = styled.div`
    display: none;
    @media only screen and (max-width: 768px) {
        display:block;
        width: 100%;
        height: auto;
      }
`;

const Center = styled.div`
        width: auto;
        height: auto;
        display: grid;
        place-items: center;
        padding: 1rem 8rem 0 8rem;
        background-color: rgba(135, 206, 235, .4);  
 backdrop-filter: blur(5px);
      border-radius: 0.5rem;
      @media only screen and (max-width: 800px) {
        padding: 1rem 4rem 0 4rem;
      }
      @media only screen and (max-width: 500px) {
        padding: 1rem 1rem 0 1rem;
        width: 99%;
      }
`;


const Roadmap = () => {

    return (
        <HomePage id="home">

            <Width>
                <Gallery />
            </Width>
            
        </HomePage>
    )
}

export default Roadmap



