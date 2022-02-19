import React, { Component } from "react";
import { config } from "react-spring";
import { CgChevronDoubleLeftR } from 'react-icons/cg';
import { CgChevronDoubleRightR } from 'react-icons/cg';
import styled from "styled-components";
import Carousel from 'react-spring-3d-carousel';

const ImageStyle = styled.div`
  width: 800px;
  height: 400px;
`
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 2rem 0;
`

export default class TeamCard extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  slides = [

    {
      key: 1,
      content: 
      <ImageStyle>
        <img src="https://picsum.photos/800/600/?random" alt="6" style={{width:'100%',height:'100%'}}/>
      </ImageStyle>
    },
    {
      key: 2,
      content:
      <ImageStyle>
        <img src="https://picsum.photos/800/600/?random" alt="7" style={{width:'100%',height:'100%'}}/>
      </ImageStyle>
    },
    {
      key: 3,
      content: 
      <ImageStyle>
        <img src="https://picsum.photos/805/800/?random" alt="8" style={{width:'100%',height:'100%'}}/>
      </ImageStyle>
    }
  ];

  render() {
   
    return (
      <div className="CustomStyle" style={{ width: "90%", height: "400px", margin: "2rem auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <ButtonContainer>
          
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}
              style={{
                background:'transparent',
                border:'none',
                color: 'rgba(27, 19, 124, 1)',
                cursor:'pointer'
              }}
            >
              <CgChevronDoubleLeftR size='2rem' />

            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}
              style={{
                background:'transparent',
                border:'none',
                color: 'rgba(27, 19, 124, 1)',
                cursor:'pointer'
              }}
            >
              <CgChevronDoubleRightR  size='2rem'/>
            </button>
          
        </ButtonContainer>
      </div>
    );
            
    }
}
