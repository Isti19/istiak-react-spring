import React, { useState } from 'react';
import styled from 'styled-components';
// import Video from '../../videos/video-1.mp4';
import { Button } from '../Button';

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg> */}
      </HeroBg>

      <HeroContent>
        {/* <HeroHeader>Exclusive Automotive For You</HeroHeader> */}
        {/* <HeroText>Choose from our large fleet of luxury vehicles</HeroText> */}
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;
`;

const HeroBg = styled.div``;

const VideoBg = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;

const HeroHeader = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
`;
const HeroText = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  /* max-width: 600px; */
`;

const HeroBtnWrapper = styled.div`
  display: flex;
`;

export default HeroSection;
