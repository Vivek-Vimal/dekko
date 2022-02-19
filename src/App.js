import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Page/Page1/Home'
import Page2 from './Page/Page2/Page2'
import Page2a from './Page/Page2a/Page2a'
import Page3 from './Page/Page3/Page3'
import Page4 from './Page/Page4/Page4'
import Page5 from './Page/Page5/Page5'
import Page6 from './Page/Page6/Page6'
import Page7 from './Page/Page7/Page7'
import Footer from './Page/Footer/Footer'
import theme from "styled-theming";
import Page6a from './Page/Page6a/Page6a';
import Page6c from './Page/Page6c/Page6c';
import Page6b from './Page/Page6b/Page6b'
import SuperPower from './Page/SuperPowers/SuperPower'
import Roadmap from './Page/Roadmap/Roadmap'
import styled, { ThemeProvider } from "styled-components";
import DarkThemeProvider from "./DarkThemeProvider";
import BlockchainProvider from './BlockchainProvider';
import BigCardPage from './Page/BigCardPage/BigCardPage'
import Team from './Page/Team/Team'
import Comment from './Page/comment/Comment'

export const backgroundColor = theme("theme", {
  light: "#a1dcf2",
  dark: "#27343a",
});


const Container = styled.div`
  background: ${backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -2;
`;

const App = () => {

  console.log(backgroundColor)

  return (
    <DarkThemeProvider>
      {/* <Container> */}
      <BlockchainProvider />
      <Navbar />
      <Home />
      <Page2 />
      <Page2a />
      
      <Page6 />
      <Page6a />
      <Page6b />
      <Page6c />
      <Page7 />
    
      <SuperPower />
      <Roadmap />
      <BigCardPage />
      <Team />
      <Comment />
      <Footer />
      {/* </Container> */}
    </DarkThemeProvider>
  )
}

export default App
