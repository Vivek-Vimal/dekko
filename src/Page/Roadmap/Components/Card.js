import React from 'react'
import styled from 'styled-components';
import theme from 'styled-theming';
import Tilt from 'react-parallax-tilt';
 import { T } from '../../Page1/Home'
import { Button } from '../../Page1/Home'
import { H } from '../../Page1/Home';
// import arrow from './arrow.png'
// import logo from './Logo.png'
import top from '../../Page6/components/top.png'

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
        min-height: 18rem; 
        width: 45rem;   
       
        // padding: 14px;
        border-radius: 1rem;
        border: 2px solid #FFF;
        border-radius: 1.8rem;
        background-color: 	rgb(25, 25, 112,0.7);
        // @media only screen and (max-width: 1700px) {
            
        //     width: 50rem;   
        // }
        // @media only screen and (max-width: 1400px) {
            
        //     width: 45rem;   
        // }
        @media only screen and (max-width: 1300px) {
            
            width: 40rem;   
        }

        @media only screen and (max-width: 768px) {
            min-height: 18rem; 
            width: 100%;   
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


    const BoxContent = styled.div`
        
        padding: 1rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        @media only screen and (max-width: 1300px) {
            padding: 0 1.7rem 2rem 1.7rem;
            width: 40rem;   
        }
        
    `
    const Lower =  styled.div`
        display: flex;
        align-items: center;
    `


    const Text = styled.div``

    const SmallText = styled(T)`
        font-size: 1.1rem;
        font-weight: 500;
        max-width: 568px;
        text-align: center;
    `

    return (
        <Box>
           
           
                <Upper>
                    <img src={top} alt="" style={{width:"100%",height:"100%",borderRadius:'2rem 2rem 0 0 '}} />
                </Upper>
                
            <BoxContent>
        
                   
                <Text></Text>
                <H style={{fontSize:'1.5rem',textAlign:'center',margin:'-1rem 0 1rem 0'}}>
                Dekka Create Easy Way ..
                <br />
                Money Transfer....
                </H>
                <SmallText>
                    {props.content ? props.content : "Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi complectitur, postea... "}
                </SmallText>
                        <Button type='button'
                            style={{background:'linear-gradient(to right, rgba(21, 55, 208, 1), rgba(27, 38, 157, 1))',color:'#fff'}}   
                        >
                            Read More
                        </Button>
                
     
            </BoxContent>
        </Box>
    )
}

export default Card
