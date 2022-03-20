import React from "react";
import "./Slide.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel';


const Slide = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carousel-images"
            src="https://st4.depositphotos.com/6923920/41187/i/450/depositphotos_411876904-stock-photo-fashion-sale-banner-design-template.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carousel-images"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0be910121212199.60c10ce125f00.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={300}>
          <img
            className="d-block w-100 carousel-images"
            src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5fd9d6d5bff39_template_image_1608111829.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
