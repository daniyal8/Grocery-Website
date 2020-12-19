import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Corousel.css';

class App extends Component {
  render() {
    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
        <div><img src={'https://backend.mandiexpress.pk/content/images/thumbs/001/0011451_sweet-lemon-mosambi-dozen-grade-a_125.jpeg'} alt="Credit to Joshua Earle on Unsplash"/></div>
        <div><img src={'https://backend.mandiexpress.pk/content/images/thumbs/001/0011451_sweet-lemon-mosambi-dozen-grade-a_125.jpeg'} alt="Credit to Alisa Anton on Unsplash"/></div>
        <div><img src={'https://backend.mandiexpress.pk/content/images/thumbs/001/0011451_sweet-lemon-mosambi-dozen-grade-a_125.jpeg'} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
        <div><img src={'https://backend.mandiexpress.pk/content/images/thumbs/001/0011451_sweet-lemon-mosambi-dozen-grade-a_125.jpeg'} alt="Credit to Pierre Châtel-Innocenti on Unsplash"/></div>
        <div><img src={'https://backend.mandiexpress.pk/content/images/thumbs/001/0011451_sweet-lemon-mosambi-dozen-grade-a_125.jpeg'} alt="Credit to Richard Nolan on Unsplash"/></div>
        <div><img src={'https://backend.mandiexpress.pk/content/images/thumbs/001/0011451_sweet-lemon-mosambi-dozen-grade-a_125.jpeg'} alt="Credit to Cristina Gottardi on Unsplash"/></div>
        </Slider>
      </div>
    );
  }
}

export default App;
