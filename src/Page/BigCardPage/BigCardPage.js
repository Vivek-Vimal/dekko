import React from 'react'
import styled from 'styled-components'
import theme from "styled-theming";
import { CardData } from '../config/config'
import TeamCard from '../../components/TeamCard/TeamCard'
import backg from './bg.png'
import { H,Line, Trr } from '../Page2/Page2'
import { Button } from '../Page1/Home'
import BigCard from './components/BigCard';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

export const bColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  

const Sec = styled.section`
    display: flex;
    overflow-x: hidden !important;
    align-items: center;
    justify-content: center;
    min-height: 45rem;
    width: 100%;
    padding:0 0 3rem 0;
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
  }

`

const Width = styled.div`
  width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

// @media only screen and (max-width: 1500px) {
//   width: 100%;
//   justify-content: space-between;
// }


// @media only screen and (max-width: 1100px) {
//   flex-direction: column;
// }

`

const GridAuto = styled.div`
    display: grid;
    width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
  place-items: center;

@media only screen and (max-width: 1300px) {
  width: 90%;
}
@media only screen and (max-width: 768px) {
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
  width: 95%;
}
@media only screen and (max-width: 330px) {
  width: 100%; 
}
`

const resposive =  {
    0: {
        items: 1,
    },
    
   2200:{
     items: 1,
   }
  }

const BigCardPage = () => {
    return (
        <Sec >
            
          <Width>

            <AliceCarousel
                  // autoPlay={true}
                  // infinite={true}
                  animationDuration={1468}
                  disableButtonsControls={true}
                  // disableDotsControls={true}
                  // autoPlayStrategy={'none'}
                  // autoHeight={true}
                  // autoWidth={true}
                  responsive={resposive}
                  
              > 
                {/* <Card /> */}
                <BigCard />
                <BigCard />
                <BigCard />
            </AliceCarousel>

          </Width>

        </Sec>
    )
}

export default BigCardPage
