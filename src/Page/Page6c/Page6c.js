import React from 'react'
import styled from 'styled-components'
import theme from "styled-theming";
import { CardData } from '../config/config'
import TeamCard from '../../components/TeamCard/TeamCard'
import backg from './bg.png'
import { H,Line, Trr } from '../Page2/Page2'
import { Button } from '../Page1/Home'
import SmallCard from './components/Card';

export const bColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  

const Sec = styled.section`
    display: flex;
    overflow-x: hidden !important;
    align-items: center;
    justify-content: center;
    min-height: 60rem;
    width: 100%;
    padding: 3rem 0;
    background-image: url(${backg});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    @media only screen and (max-width: 1300px) {
     
      background-size: auto 100%;
   
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
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 1500px) {
  width: 85%;
  justify-content: space-between;
}


@media only screen and (max-width: 1100px) {
  flex-direction: column;
}

`

const GridAuto = styled.div`
    display: grid;
    width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
  place-items: center;

@media only screen and (max-width: 1300px) {
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
}
@media only screen and (max-width: 768px) {
  grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
  width: 95%;
}
@media only screen and (max-width: 330px) {
  width: 100%; 
}
`


const Page6 = () => {
    return (
        <Sec >
            
          <Width>

            <div style={{margin:'1rem 0 0 0 '}}>
              <H>Why DEKKA<span style={{color:'red !important'}}>?</span></H>
              <Line />
              <Trr>
                Digital assets are fast becoming a staple in organizations
                 throughout the world. For anyone who pays attention to 
                 the current landscape, digital assets and DLT are 
                 eventualities. Think safe, secure, transparent and cheap
                  digital asset transactions - all at your fingertips.
                  Dekka is setting the industry standard for policy and 
                  decision gateways that create a robust system for
                  digital asset management for anyone.
              </Trr>
              <Button type='button'
                 style={{background:'linear-gradient(to right, rgba(21, 55, 208, 1), rgba(27, 38, 157, 1))',color:'#fff'}}
              >
                Learn More
              </Button>
            </div>
            <div
              style={{margin:'6rem 0 0 0 ',width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}
            >
              <H>
              Memorable wins, every time<span style={{color:'red'}}>.</span>
              </H>
              <Trr
                style={{textAlign:'center',maxWidth:'768px'}}
              >
              We help companies, big and small, discover what 
              makes them unique and channel it into a memorable
               experience that outsells and outshines their 
               competition online.

              </Trr>
            </div>
            <GridAuto>

              <SmallCard />
              <SmallCard />
              <SmallCard />
              {/* <SmallCard />
              <SmallCard />
              <SmallCard /> */}
            
            </GridAuto>

          </Width>

        </Sec>
    )
}

export default Page6
