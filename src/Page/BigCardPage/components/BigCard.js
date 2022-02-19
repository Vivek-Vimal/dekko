import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
 import { T } from '../../Page1/Home'
import { Button } from '../../Page1/Home'
 import arrow from './arrow.png'
import logo from './Logo.png'
// import top from './top.png'
import { H } from '../../Page1/Home';
import { Line } from '../../Page2/Page2';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

  export const bColor = theme("theme", {
    light: "linear-gradient(to right, #36d1dc, #5b86e5)",
    dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
  });  

const BigCard = (props) => {
    const Box= styled.div`
        min-height: 20rem; 
        width: 60rem;   
        margin: 0 auto;
        padding: 14px;


        background: linear-gradient(208.18deg, #332E81 9.05%, #2D1FD1 76.74%);
        border-radius: 24px;
        padding: 0 2rem 2rem 2rem;
     

        // @media only screen and (max-width: 768px) {
        //     height: 18rem; 
        //     width: 18rem;   
        // }
    `;
    const Upper = styled.div`
        min-height: 4rem;
        // width: 100%;
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
        width: 5rem;
        margin: 1.2rem 1rem 0 0;
    `

    const BoxContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
        // @media only screen and (max-width: 1300px) {
        //     padding: 0 1.7rem 2rem 1.7rem;
        //     width: 40rem;   
        // }
        
    `
    const Lower =  styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

    width: 100%;
    `
    const Logo = styled.div`
        width: 6rem;
    `

    const Text = styled.div`
        width: 30rem;
    `

    const SmallText = styled(T)`
        font-size: 1.2rem;
        font-weight: 500;
    `

    const Customer = styled.div`
        display: flex;
        align-items: center;
        justify-content :space-between;
  
        width: 19rem;
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
                <H style={{fontSize:'1.8rem',textAlign:'center',margin:'-1rem 0 1rem 0',fontWeight:'600'}}>
                    What our customer are saying
                </H>
                <Line style={{background:'#FFF'}}/>
                </Upper>
                <Lower>
                    <Customer>
                        <Logo>
                            <img src={`${props.customerimg ? props.customerimg : logo }`} alt="" style={{width:"100%",height:"100%"}} />
                        </Logo>
                        <div>
                            <H style={{fontSize:'1.4rem',margin:'1rem 0 0 0',fontWeight:'600'}}>
                                {props.customerName ? props.customerName : 'Edward Newgate'}
                            </H>
                            <SmallText>
                                {props.customerName ? props.customerName : 'Founder Circle'}
                            </SmallText>
                        </div>
                    </Customer>
                    <Text>
                        <SmallText>
                        {props.content ? props.content : "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"}
                        </SmallText>
                    </Text>
                </Lower>
            </BoxContent>
        </Box>
    )
}

export default BigCard
