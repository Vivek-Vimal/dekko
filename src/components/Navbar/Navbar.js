import React,{useState, useEffect, useRef } from 'react'
import './Navbar.css';
import logo from './logo.png';
import mlogo from './logo.png';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Link, animateScroll as scroll } from "react-scroll";
import theme from "styled-theming";
import { Button } from '../../Page/Page1/Home';

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});  

const Link1 = styled(Link)`
  display: flex;
  margin: 0 0 0 4rem;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @-webkit-keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes hvr-pulse {
    25% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }
    75% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
 
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  
  &:hover, &:focus, &:active {
    -webkit-animation-name: hvr-pulse;
    animation-name: hvr-pulse;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}
@media(max-width: 1500px){
   margin: 0 0 0 2rem;
}

`;

const Link2 = styled(Link)`
  display: flex;
  margin: 0 1rem;
  align-items: center;
  text-decoration: none;
  color: rgba(79, 79, 79, 1);
  cursor: pointer;
  font-weight: 600;
  // font-family: 'Montserrat', sans-serif !important; 
  @media only screen and (max-width: 768px) {
    margin: 0 1rem;
  }

`;

const H1 = styled.h1`
  color: ${backgroundColor};
`

const Mobile = styled.div`
  display: none;
  @media only screen and (max-width: 900px) {
    display: block;
  }`

const PC = styled.div`
display: block;
@media only screen and (max-width: 900px) {
  display: none;
}`

const Container = styled.div`
  box-shadow: 0px 6px 10px rgba(60, 114, 193, 0.3);
  border-radius: 50px;
  background-color: #FFFFFF;
  display: flex;
            justify-content: space-between;
            align-items:center;
  width: 1600px;
  padding: 0.5rem 0;
  margin: 3rem 0 0 0;

  @media only screen and (max-width: 1700px) {
    width: 90%;
  }
@media only screen and (max-width: 1400px) {
    width: 95%;
    margin: 0.5rem 0 0 0;
}
@media only screen and (max-width: 900px) {
   padding: ;
   margin:  0 0 0;
}
`

const Navbar = () => {

  

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })  

    return (
        <nav className={navbar ?  "navActiveLight" : "nav"} >

          <Container>

          <PC>
            <Link1 to="home" spy={true} smooth={true} ><img src={logo} alt="Logo" className={navbar ? "LogoActive" : "Logo"} /></Link1>
          </PC>
          <Mobile>
            <Link1 to="home" spy={true} smooth={true} style={{marginRight:"0"}} ><img src={mlogo} alt="mlogo" className="LogoB"/></Link1>
          </Mobile>
          <PC>
            <ul className="list">
                <Link2 to="learn" spy={true} smooth={true} offset={-80}>Home</Link2>
                <Link2 to="rarity" spy={true} smooth={true} offset={-80}>Services</Link2>
                <Link2 to="faq" spy={true} smooth={true} offset={-80}>About Us</Link2> 
                <Link2 to="roadmap" spy={true} smooth={true} >Blog</Link2> 
                <Link2 to="roadmap" spy={true} smooth={true} >Contact</Link2> 
              
            </ul> 
          </PC>

          <PC style={{margin:'0 4rem 0 0'}}>
            <Button type='button'
              style={{background:'linear-gradient(to right, rgba(21, 55, 208, 1), rgba(27, 38, 157, 1))',color:'#fff'}}
            >
              Request Demo
            </Button>
          </PC>
        
          <Mobile ref={node}>
            <FocusLock disabled={!open}>
              <Burger  open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </Mobile>

          </Container>

        </nav>   
    )
}

export default Navbar
