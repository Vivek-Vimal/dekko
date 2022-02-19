import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
 import { T } from '../../Page1/Home'
import { Button } from '../../Page1/Home'
import arrow from './arrow.png'
import logo from './Logo.png'
import top from './top.png'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const Card = (props) => {
    const Box= styled.div`
        min-height: 25rem; 
        width: 55rem;   
        
        margin: 0 auto !important;
        border-radius: 1rem;

        @media only screen and (max-width: 1700px) {
            
            width: 50rem;   
        }
        @media only screen and (max-width: 1400px) {
            
            width: 45rem;   
        }
        @media only screen and (max-width: 1300px) {
            
            width: 40rem;   
        }

        @media only screen and (max-width: 968px) {
            height: auto; 
            width: 95%;   
        }
    `;
    const Upper = styled.div`
        height: 4rem;
        width: 100%;
        `;

    // const Lower = styled.div`
    //     width: 100%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-between;
    //     margin: 1rem 0 0 0 ;
    // `

    const Arrow =  styled.div`
        height: 4rem;
        width: 4rem;
        margin: 0 3rem 0 0;
    `

    const Line = styled.div`
        width: 0.2rem;
        min-height: 12rem;
        background-color: rgba(255, 255, 255, 0.5);;
        margin: 0 2rem;
    `
    const BoxContent = styled.div`
        border: 2px solid #FFF;
        border-radius: 1.8rem;
      //  box-shadow: 0px 30px 80px rgba(0, 0, 0, 0.25);
        // padding: 0 2rem 2rem 2rem;
        @media only screen and (max-width: 1300px) {
            // padding: 0 1.7rem 2rem 1.7rem;
            width: 40rem;   
        }
        
    `
    const Lower =  styled.div`
        display: flex;
        align-items: center;
        margin: 0 2rem 2rem 2rem ;
    `
    const Logo = styled.div`
        width: 40rem;
    `

    const Text = styled.div``

    const SmallText = styled(T)`
        font-size: 1.2rem;
        font-weight: 500;
    `

    return (
        <Box>
            <div style={{width:'100%',display:'flex',justifyContent:'flex-end'}}>
                <Arrow>
                    <img src={arrow} alt="" style={{width:"100%",height:"100%"}} />
                </Arrow>
            </div>
            <BoxContent>
                <Upper>
                    <img src={top} alt="" style={{width:"100%",height:"100%"}} />
                </Upper>

                <Lower>
                    <Logo>
                        <img src={logo} alt="" style={{width:"100%",height:"100%"}} />
                    </Logo>
                    <Line />
                    <Text>
                        <SmallText>
                        {props.content ? props.content : "We have the best rates . Simply start your exchange right now. Sign up for our Affiliate program and earn commission from each "}
                        </SmallText>
                        <Button type='button'
                            style={{background:'linear-gradient(to right, rgba(21, 55, 208, 1), rgba(27, 38, 157, 1))',color:'#fff'}}   
                        >
                            Open
                        </Button>
                    </Text>
                </Lower>
            </BoxContent>
        </Box>
    )
}

export default Card
