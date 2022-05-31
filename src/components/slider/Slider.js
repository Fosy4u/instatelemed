import React, { Component } from "react";
import Slider from "react-slick";
import { Box, ResponsiveContext } from "grommet";
import { SliderImage } from "./SliderImage";
import { data, images } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InstaSlider = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToScroll: 1,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const galleryItems = () => {
    console.log(images);
    return images.map((item, index) => (
      <SliderImage src={process.env.PUBLIC_URL + item} key={index} />
    ));
  };

  const getNumOfItemsToShow = (size) => {
    return size === "xsmall"
      ? 2
      : size === "small"
      ? 3
      : size === "medium"
      ? 4
      : 5;
  };

  return (
    <Box style={{ marginBottom: "10px" }}>
      <Slider slidesToShow={4} {...settings}>
        {galleryItems()}
      </Slider>
    </Box>
  );
};

export { InstaSlider as Slider };
