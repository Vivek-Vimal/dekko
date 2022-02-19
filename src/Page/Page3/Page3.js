import React from 'react'
import {data} from '../config/config'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import theme from "styled-theming";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

export const backgroundColor = theme("theme", {
    light: "#000000",
    dark: "#E5E5E5",
  });  

const Sec = styled.section`
min-height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    @media only screen and (max-width: 768px) {
        
        width: 100%;
        padding: 2rem 0;
    }
`;

const Width  = styled.div`
    width: 1600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 1700px) {
        width: 93%;
        justify-content: space-between;
    }
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

const Page3 = () => {

    return (
        <Sec>
            <Width>

              

               


                      

            {data?.map(e => (
                            
                <Card img={e.img} name={e.name.toUpperCase()} desc={e.desc} bg={e.bg}/>
                            
            ))}
                
            </Width>
        </Sec>
    )
}

export default Page3
