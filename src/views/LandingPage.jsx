import React from 'react';
import { Container, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

import Slider from '../components/landing/Slider';
import DescriptionCard from '../components/landing/DescriptionCard';
import Card1Image from "../assets/images/photography.png"

const LandingPage = () => {
  const cardImages = [Card1Image, Card1Image, Card1Image, Card1Image, Card1Image, Card1Image];
  const heading = "Lorem ipsum dolor sit";                      
  const desp = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium";

  const navigate = useNavigate();
  return (
    <div>
      <Slider />
      <Container>
        <div className='description'>
          <h1>Lorem ipsum</h1>
        </div>
        <Grid container spacing={8} className=''>
          {cardImages.map((cardImage, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
              <DescriptionCard
                cardImage={cardImage}
                heading={heading}
                description={desp}
                linkTo="/Page2"
              />
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <br /> 
        <div className='hyperlink-section'>
          <div className='hyperlink-content'>
            <h1 style={{ textAlign: 'center', fontSize: '28px' }}> Lorem ipsum dolor sit amet, consectetur</h1>
            <p style={{ fontSize: '16px' }}>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem 
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
              autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
              consequatur.
            </p>
            <button
              onClick={() => {
                navigate("/Page3");
              }}
              className="call-btn mt-2"
            >
              Lorem ipsum dolor 
            </button>
          </div>
          <div className='hyperlink-img'>
            <img src={Card1Image} alt="img"></img>
          </div>
        </div>
      </Container>
      <div className='hyperlink-section-footer'></div>
    </div>
  );
};

export default LandingPage;