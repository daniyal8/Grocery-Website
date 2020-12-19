import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import Veg1 from './SliderImages/veg1.jpg'
import Fruit1 from './SliderImages/fruit1.jpg'
import Veg2 from './SliderImages/veg2.jpg'


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Veg1}
            alt="First slide"
            width="100%"
            height="30%"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Fruit1}
            alt="Second slide"
            width= "100%"
            height= "65%"
          />
  
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Veg2}
            alt=""
            width="100%"
            height="65%"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  // render(<ControlledCarousel />);
export default ControlledCarousel;

