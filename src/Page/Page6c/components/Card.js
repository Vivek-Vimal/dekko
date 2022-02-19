import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';

import logo from './1.png'

import { H,Trr ,Line } from '../../Page2/Page2'

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const SmallCard = (props) => {
    const Box= styled.div`
        margin: 2rem 0 0 0;
        width: 22rem;   
        // background: yellow;
        padding: 14px;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(0deg, rgba(137, 186, 214, 0.04), rgba(137, 186, 214, 0.04)), #FFFFFF;
        // border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 16px;

        @media only screen and (max-width: 768px) {
            height: auto; 
            width: 90%;   
        }
        @media only screen and (max-width: 510px) {
            height: auto; 
            width: 98%;   
        }
    `;
 

    // const Lower = styled.div`
    //     width: 100%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-between;
    //     margin: 1rem 0 0 0 ;
    // `

    const Logo = styled.div`
        width: 10rem ;
        width: 10rem;
    `

    const Text = styled.div`
         margin: 0 0 0 1rem;
         display: flex;
         flex-direction: column;
         align-items: center;
    `

    const SmallH = styled(H)`
        font-size: 1.3rem;
        margin-bottom: 0rem;
    `


    const SmallT = styled(Trr)`
        font-size: 1rem;
      
    `

    return (
        <Box>
            
     
      
                    <Logo>
                        <img src={`${props.content ? props.content :logo}`} alt="" style={{width:"100%",height:"100%"}} />
                    </Logo>
                 
                    <Text>
                        <SmallH>
                            {props.Heading ? props.Heading : 'Perfect Protection'}
                        </SmallH>
                        <Line style={{height: '0.2rem', width: '3rem',margin:'0 4rem 1rem 0'}} />
                        <SmallT>
                            {props.Desc ? props.Desc : 'Monitor transaction process help you prevent the tricks. Provide multiple protection methods'}
                        </SmallT>
                    </Text>
    
   
        </Box>
    )
}

export default SmallCard
