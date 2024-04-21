import React from "react";
import { Carousel, Image } from "react-bootstrap";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Slide1Image from "../../assets/images/photography.png";

const Slider = () => {
  const sliderImages = [Slide1Image, Slide1Image, Slide1Image];
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "80px" }}>
      <Container maxWidth="xl">
        <Carousel pause="hover" className="bg-primary carousel-main">
          {sliderImages.map((sliderImage, index) => (
            <Carousel.Item key={index} style={{ height: "491px" }}>
              <Image
                src={sliderImage}
                alt="Lorem ipsum dolor sit amet"
                className="carousel-img"
                onClick={() => navigate("/Page2")}
              />
              <Carousel.Caption style={{ backgroundColor: "white" }}>
                <h1 className="slider-heading" style={{ color: "black" }}>
                  Lorem ipsum dolor sit amet
                </h1>
                <button
                  style={{ background: "black" }}
                  onClick={() => {
                    navigate("/Page2");
                  }}
                >
                  Lorem Ipsum
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default Slider;
