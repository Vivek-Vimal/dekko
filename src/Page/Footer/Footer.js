import React from 'react'
 import './Footer.css'
import styled from 'styled-components';
import e from './btn.png'
import l from './logo.png'
import f from './f.png'
import t from './t.png'
import i from './i.png'
import d from './d.png'
import { motion } from 'framer-motion'
import img from './top.png'

const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 0.9rem;
    margin: 1rem 0;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;

const Ts = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 0.9rem;
    margin: 1rem 0;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        text-align: center;
      }
`;

const H= styled.p`
    color: #FFF;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
      }
`;

const Sec = styled.footer`
    height: auto;
    width: 100%;
     display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
   
    background: linear-gradient(178.18deg, rgba(21, 21, 175, 0.5) -13.56%, #100B42 158.3%);
    @media only screen and (max-width: 1160px) {

        display: none !important;
      }
`;

const Input = styled.div`
    width: 18rem;
    height: 3.1rem;
    position: relative;
    @media only screen and (max-width: 400px) {
        width: 99%;
    }
`
const Tele = styled(motion.div)`
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      position: absolute;
      right:0;
      top: 0;
      cursor: pointer;
      margin: 0.05rem 0 0 0;
`
const Left = styled.div`
     display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0 2rem 0;
    border-bottom: 1px solid rgb(255,255,255, 0.1);

    @media only screen and (max-width: 1000px) {
       
        flex-direction: column;
        align-items: center;
    }
`
const SubscribeBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 25rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    mix-blend-mode: normal;
    border: 1px solid #FFFFFF;
    border-radius: 8px;

    @media only screen and (max-width: 510px) {
       
        width: 99%;
    }
`
const Icon = styled(motion.div)`
      width: 3rem;
      height: 3rem;
      background-color: #ff0000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      cursor: pointer;
`
const MiddleLogo = styled.div`
    width: 16rem;
    height: 5rem;
      @media only screen and (max-width: 1000px) {
        
        margin: 1rem 0 2rem 0;
    }
`
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1rem 0 0 0;
    @media only screen and (max-width: 768px) {
        
        flex-direction: column;
    }
`
const Width  = styled.div`
    width: 1600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: auto;
    padding: 0 2rem;
    
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
        flex-direction: column;
       
        padding: 2rem 0;
    }
    @media only screen and (max-width: 800px) {
        width: 100%;
        
        
    }
    @media only screen and (max-width: 600px) {
   
        justify-content: center;
      
    }
`
const Image1 = styled(motion.div)`
      width: 100%;
      height: 12rem;
      @media only screen and (max-width: 1000px) {
   
        margin: 0 0 0 2rem;
      
    }
`
const Style = styled.div`
    display:flex;
    width: 80%;
    justify-content: space-between;
    margin:0 5vw 0 0;
    @media only screen and (max-width: 1000px) {
   
        margin:  0 0;
      
    }
    @media only screen and (max-width: 768px) {
   
        width: 99%;
        margin: 0 1rem;
      
    }
`

const Footer = () => {
    return (
        <Sec>
            <Image1>
                <img src={img} alt="" style={{ width: "100%", height: "100%" }} />
            </Image1>
            <Width>
                <div style={{width:'100%'}}>
                <MiddleLogo>
                    <img src={l} alt="" style={{width:"100%",height:"100%"}} />
                </MiddleLogo>
                </div>
            <Left>
            
            {/* <Style > */}
                <div>
                    <H>Product</H>
                    <T>Employee database</T>
                    <T>Payroll</T>
                    <T>Payroll</T>
                    <T>Time tracking</T>
                    <T>Payroll</T>
                </div>

                <div >
                    <H>Product</H>
                    <T>Employee database</T>
                    <T>Payroll</T>
                    <T>Time tracking</T>
                    <T>Payroll</T>
                    <T>Payroll</T>
                </div>

                <div>
                    <H>Product</H>
                    <T>Employee database</T>
                    <T>Payroll</T>
                    <T>Payroll</T>
                    <T>Time tracking</T>
                    <T>Payroll</T>
                </div>
            {/* </Style> */}

                <SubscribeBox>
                    <H>Subscribe</H>
                    <Input>
                        <input type="email" placeholder="Email Address..."  className="input" style={{height:"100%",width:"100%",}} />
                        <Tele
                            whileHover={{scale: 1.3}}
                            whileTap={{scale:0.7}}
                        >
                            <img src={e} alt="" style={{width:"100%",height:"100%"}} />
                        </Tele>
                    </Input>
                    <T>
                    Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing 
                    how companies engage with their clients & their team.
                    </T>
                </SubscribeBox>

            </Left>
          
            <Right>
                {/* <Flex>
                    <Icon
                        whileHover={{scale: 1.3}}
                        whileTap={{scale:0.7}}
                    >
                        <img src={f} alt="" style={{width:"1.5rem",height:"1.5rem"}} />
                    </Icon>
                    <Icon 
                        whileHover={{scale: 1.3}}
                        whileTap={{scale:0.7}}
                    style={{margin:"0 1rem"}}>
                        <img src={t} alt="" style={{width:"1.5rem",height:"1.5rem"}} />
                    </Icon>
                    <Icon
                        whileHover={{scale: 1.3}}
                        whileTap={{scale:0.7}}
                    style={{margin:"0 1rem 0 0"}}>
                        <img src={i} alt="" style={{width:"1.5rem",height:"1.5rem"}} />
                    </Icon>
                    <Icon
                        whileHover={{scale: 1.3}}
                        whileTap={{scale:0.7}}
                    >
                        <img src={d} alt="" style={{width:"1.5rem",height:"1.5rem"}} />
                    </Icon>
                </Flex> */}
                <div>
                    f
                </div>
                <div style={{display:'flex'}}>
                    <Ts>Terms</Ts>
                    <Ts style={{margin:'1rem'}}>Privacy</Ts>
                    <Ts>Cookies</Ts>
                </div>
                <div>
                    <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9377 36C30.0054 36 38.1668 28.165 38.1668 18.5C38.1668 8.83502 30.0054 1 19.9377 1C9.86997 1 1.7085 8.83502 1.7085 18.5C1.7085 28.165 9.86997 36 19.9377 36Z" stroke="white" stroke-width="1.5"/>
                        <path d="M15.7539 14.9671C16.6073 14.9671 17.2992 14.3029 17.2992 13.4835C17.2992 12.6642 16.6073 12 15.7539 12C14.9004 12 14.2085 12.6642 14.2085 13.4835C14.2085 14.3029 14.9004 14.9671 15.7539 14.9671Z" fill="white"/>
                        <path d="M17.0417 15.958H14.4661C14.3239 15.958 14.2085 16.0688 14.2085 16.2053V23.623C14.2085 23.7595 14.3239 23.8703 14.4661 23.8703H17.0417C17.1838 23.8703 17.2992 23.7595 17.2992 23.623V16.2053C17.2992 16.0688 17.1838 15.958 17.0417 15.958Z" fill="white"/>
                        <path d="M24.717 15.5464C23.6162 15.1844 22.2393 15.5024 21.4135 16.0726C21.3852 15.9662 21.2842 15.8871 21.1642 15.8871H18.5886C18.4464 15.8871 18.3311 15.9979 18.3311 16.1344V23.5521C18.3311 23.6886 18.4464 23.7994 18.5886 23.7994H21.1642C21.3064 23.7994 21.4218 23.6886 21.4218 23.5521V18.2212C21.838 17.8771 22.3742 17.7673 22.8131 17.9463C23.2386 18.1189 23.4823 18.5402 23.4823 19.1015V23.5521C23.4823 23.6886 23.5977 23.7994 23.7398 23.7994H26.3154C26.4576 23.7994 26.573 23.6886 26.573 23.5521V18.6035C26.5436 16.5715 25.5479 15.8194 24.717 15.5464Z" fill="white"/>
                    </svg>

                    <svg style={{margin:'0 1rem'}} width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.0207 36C29.0884 36 37.2498 28.165 37.2498 18.5C37.2498 8.83502 29.0884 1 19.0207 1C8.95298 1 0.791504 8.83502 0.791504 18.5C0.791504 28.165 8.95298 36 19.0207 36Z" stroke="white" stroke-width="1.5"/>
                        <path d="M20.6804 14.0208H22.3558C22.5099 14.0208 22.635 13.9076 22.635 13.7682V12.2526C22.635 12.1132 22.5099 12 22.3558 12H20.6804C18.9871 12 17.6089 13.2463 17.6089 14.7786V16.5468H15.6542C15.5001 16.5468 15.375 16.6599 15.375 16.7994V18.3149C15.375 18.4544 15.5001 18.5675 15.6542 18.5675H17.6089V23.8721C17.6089 24.0115 17.734 24.1247 17.8881 24.1247H19.5635C19.7176 24.1247 19.8427 24.0115 19.8427 23.8721V18.5675H21.7973C21.9174 18.5675 22.0241 18.4978 22.0626 18.3948L22.6211 16.8792C22.6496 16.8024 22.635 16.7175 22.5825 16.6513C22.5295 16.5857 22.4457 16.5468 22.3558 16.5468H19.8427V14.7786C19.8427 14.3608 20.2186 14.0208 20.6804 14.0208Z" fill="white"/>
                    </svg>

                    <svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.1042 36C29.1719 36 37.3333 28.165 37.3333 18.5C37.3333 8.83502 29.1719 1 19.1042 1C9.03648 1 0.875 8.83502 0.875 18.5C0.875 28.165 9.03648 36 19.1042 36Z" stroke="white" stroke-width="1.5"/>
                        <path d="M25.0629 15.2647C24.9783 15.1729 24.8419 15.1498 24.73 15.2064C24.6604 15.2416 24.5296 15.2878 24.3744 15.3334C24.5703 15.0762 24.7278 14.7882 24.7974 14.5293C24.8274 14.4177 24.7835 14.3001 24.6877 14.2336C24.592 14.1677 24.4645 14.1677 24.3688 14.2336C24.2179 14.3375 23.4899 14.6497 23.0296 14.7508C21.9893 13.8511 20.7787 13.7577 19.5202 14.4831C18.4972 15.0729 18.2745 16.2721 18.3179 17.0031C15.9763 16.7805 14.5208 15.5593 13.7015 14.5485C13.6441 14.4776 13.5517 14.4403 13.4649 14.4458C13.3736 14.4524 13.2912 14.5024 13.2445 14.5799C12.8571 15.2257 12.7497 15.9396 12.935 16.6447C13.0363 17.0295 13.2133 17.3686 13.4187 17.6434C13.3202 17.5956 13.225 17.5357 13.1354 17.4642C13.053 17.3972 12.9378 17.3845 12.8404 17.429C12.7435 17.4747 12.6817 17.5714 12.6817 17.6775C12.6817 18.8882 13.4488 19.6962 14.1651 20.1183C14.0493 20.1045 13.9285 20.0792 13.8066 20.0424C13.702 20.0111 13.5885 20.0424 13.5161 20.1238C13.4437 20.2046 13.4265 20.32 13.4716 20.4184C13.874 21.2972 14.6365 21.9017 15.58 22.121C14.7562 22.5986 13.6536 22.8328 12.6439 22.7179C12.5131 22.6998 12.3884 22.7817 12.3472 22.9059C12.306 23.0301 12.36 23.1664 12.4752 23.2301C14.007 24.0793 15.3919 24.3827 16.5886 24.3827C18.3302 24.3827 19.6744 23.7407 20.4926 23.2038C22.6984 21.7583 24.0732 19.163 23.8818 16.841C24.2352 16.5832 24.764 16.1072 25.0918 15.5955C25.1597 15.4922 25.1475 15.3559 25.0629 15.2647Z" fill="white"/>
                    </svg>


                </div>
            </Right>
            </Width>
        </Sec>
    )
}

export default Footer
