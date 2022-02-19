import React,{ useState, useEffect} from 'react'
import styled from 'styled-components'
import './Dark.css'
// import bg from './bg.gif'
import blue from './whaLe.png'
import yellow from './yellow.png'
import { motion } from 'framer-motion'
import DarkModeToggle from "react-dark-mode-toggle";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../../redux/actions";
import theme from "styled-theming";
import { BsBoxArrowUp } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";
import twi from './twitter.png'
import dis from './discord.png'
import backg from './bg.png'
import left from './left.png'
import right from './right.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

 
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

  @media only screen and (max-width: 1300px) {
    background-size: auto 100%;
    // overflow: hidden;
    background-position: center center;
}
@media only screen and (max-width: 768px) {

    width: 100%;
    padding: 0rem 0.5rem 2rem 0.5rem;
    background-size: auto 100%;
    flex-direction: column;
}`;

const Width  = styled.div`
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media only screen and (max-width: 1400px) {
        width: 80%;
        justify-content: space-between;
    }
 
    
    @media only screen and (max-width: 600px) {
        width: 90%;
        
        margin: 5rem  0 0 0;
    }
`
export const H = styled.p`
    color: #ffffff;
    font-size: 2.3rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: left;
    margin: 0 0 1.5rem 0;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.5rem;
        font-weight: bold;
      }
`;

export const T = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;

  color: #ffffff;
  margin: 0 0 1.5rem 0;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    
  }
`;

const ShowButton = styled(Link)`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background:linear-gradient(to right, #fc00ff, #00dbde);
    color: #FFF ;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    height: 4rem;
    width: 3rem;
    border-radius: 0.5rem;
    transition:  0.5s linear;
    right: 2rem ;
    bottom: 5rem;
    display: grid;
    place-items: center;
    z-index: 9999;
    
`
const TextContainer = styled(motion.div)`
    
    width: 42rem;
    

  
   
    @media only screen and (max-width: 1200px) {
      width: 40rem;
    }
    @media only screen and (max-width: 1000px) {
        width: 85%;
    }
    @media only screen and (max-width: 998px) {
        height: auto;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    
    @media only screen and (max-width: 600px) {
        height: auto;
        width: 100%;
        align-items: center;
    }
`;


export const Button = styled.button`
    background-color: #fff;
    color: rgba(19, 25, 97, 1);
    border-radius: 2rem;
    min-height: 3rem;
    min-width: 6rem; 
    padding: 0 2rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
`

// const TextContainer = styled.div`

// `

const Home = () => {

    const darkThemeEnabled = useSelector((state) => state.darkThemeEnabled);
    const dispatch = useDispatch();
    
    const [ showButton, setShowButton ] = useState(false)

    const showButtonTop = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 600) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
  
    useEffect(() => {
      showButtonTop()
      // adding the event when scroll change background
      window.addEventListener("scroll", showButtonTop)
    })  

    useEffect(() => {
      
    },[darkThemeEnabled])

    useEffect(()=>{
      Aos.init({duration: 2000}) // global duration
    },[]) 


    return (
        <HomePage id="home" className='h'>

            <Width>
             <TextContainer>
               <H style={{maxWidth:'15rem'}}>BE YOUR OWN BANK<span style={{color:'red'}}>.</span></H>
               <T>Dekka is the only decentralized policy and decision gateway for your digital assets.
                  Adopting digital assets in your organization has never been safer
                </T>
                <Button type='button'>
                  GET STARTED
                </Button>
             </TextContainer>
            </Width>

            {/* <ModeButton
                onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
                checked={darkThemeEnabled}
                size={80}
            /> */}

          { showButton ? 
          
            <ShowButton
              type="button"
              to="home" spy={true} smooth={true}
             
            >
              <BsBoxArrowUp size="2rem"/>
            </ShowButton> :
            
            null
          }
            
            
        </HomePage>
    )
}

export default Home
