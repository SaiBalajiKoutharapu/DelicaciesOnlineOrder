import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import swiperblocks from '../components/SwiperContent';
import './SwiperStyles.css';

export class Swiper extends Component {
  render() {
    return (
        <Carousel className='swiper'>
           {swiperblocks.map(swiperblock => (
            <Carousel.Item className='swiper-item' >
               <img className="d-block" src={swiperblock.image} alt="First slide"/>
               <Carousel.Caption className='swiper-content' >
                 <h3>{swiperblock.heading}</h3>
                 <p>{swiperblock.content}</p>
                 <label>{swiperblock.items}</label>
               </Carousel.Caption>
            </Carousel.Item>
           ))}
      </Carousel>
    )
  }
}

export default Swiper