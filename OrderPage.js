import React, { useRef, useState } from 'react';
import './OrderPageStyles.css';

import Info from './Info';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';







import dining1 from '../assets/dining1.avif'
import dining2 from '../assets/dining2.avif';
import dining3 from '../assets/dining3.avif';
import dining4 from '../assets/dining4.avif';
import delivery from '../assets/delivery.png';
import dining from '../assets/dining.png';
import party from '../assets/party.png';
import chicken from '../assets/chicken.avif';
import starters from '../assets/starters.avif';
import chinese from '../assets/chinese.avif';
import pizza from '../assets/pizza.avif';
import cocktails1 from '../assets/cocktails1.avif';
import pastry from '../assets/pastry.avif';
import icecream from '../assets/icecream.avif';
import salads from '../assets/salads.avif';
import brand6 from '../assets/brand6.png';
import brand from '../assets/brand.png';
import brand2 from '../assets/brand2.png';
import brand3 from '../assets/brand3.png';
import brand4 from '../assets/brand4.png';
import brand5 from '../assets/brand5.png';
import brand7 from '../assets/brand7.png';
import rest1 from '../assets/rest1.avif';
import rest2 from '../assets/rest2.avif';
import rest3 from '../assets/rest3.avif';
import rest4 from '../assets/rest4.avif';
import rest6 from '../assets/rest6.avif';
import rest7 from '../assets/rest7.avif';
import rest9 from '../assets/rest9.avif';
import slide1 from '../assets/slide1.avif';
import slide2 from '../assets/slide2.avif';
import slide3 from '../assets/slide3.avif';
import slide4 from '../assets/slide4.avif';
import slide5 from '../assets/slide5.avif';
import slide6 from '../assets/slide6.avif';
import slide7 from '../assets/slide7.avif';
import slide8 from '../assets/slide8.avif';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import Swiper from './Swiper';




function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
                display: "block",
                border:"10px",
                padding:"3px", 
                position:"absolute",
                top:"39%",
                left:"0%",
                color:"black",
             }}
        onClick={onClick}
      />
    );
  }


function OrderPage() {
    

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            }
          },
          {
          breakpoint: 600,
          settings: {
            slidesToShow:1,
            slidesToScroll:1,

          }},
        ]
      };



  return (
    <div className='order-page-main' >

        <div className='order-page'>

                <div className='tabs-main'>

                    <div data-aos="fade-up" data-aos-duration="1000" className='tabs-block'>
                        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} ><img src={delivery}></img>Delivery</button>
                        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} ><img src={dining}></img>Dining</button>
                        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)} ><img src={party}></img>Party Night</button>
                    </div>

                    <div className='content-tabs'>

                        <div className={toggleState === 1 ? "content  active-content" : "content"}>
                            
                            <div className='type'>

                                <div  data-aos="fade-up" data-aos-duration="1000"   className='filters'>
                                    <button>filter</button>
                                    <button>Pure veg</button>
                                    <button>Non Veg</button>
                                    <button>Italian</button>
                                    <button>Chinese</button>
                                </div>

                                <div data-aos="fade-up" data-aos-duration="1000" className='items'>

                                     <h2>Items what makes you happy</h2>
                                     <img src={chicken}></img>
                                     <img src={starters}></img>
                                     <img src={chinese}></img>
                                     <img src={pizza}></img>
                                     <img src={salads}></img>
                                     <img src={rest6}></img>
                                     <img src={rest7}></img>
                                     <img src={rest3}></img>
                                     <img src={rest9}></img>
{/*                                      
                                     <Link to='/restaurantfoodgallery'><div className='all-images-link'>
                                        <p>All images <i class="fa-solid fa-image"></i></p>
                                     </div></Link> */}
                                     
                                </div>

                                <div data-aos="fade-up" data-aos-duration="1500" className='brands'>
                                     
                                    <h1>Brands that are popular</h1>

                                    <div className='brand-logo'>
                                        <div data-aos="flip-left" data-aos-duration="2000" className='brand'>
                                           <img src={brand7}></img>
                                           
                                        </div>

                                        <div data-aos="flip-left" data-aos-duration="2000" className='brand'>
                                           <img src={brand}></img>
                                           
                                        </div>

                                        <div data-aos="flip-left" data-aos-duration="2000" className='brand'>
                                           <img src={brand2}></img>
                                           
                                        </div>

                                        <div data-aos="flip-left" data-aos-duration="2000" className='brand'>
                                           <img src={brand3}></img>
                                           
                                        </div>

                                        <div data-aos="flip-left" data-aos-duration="2000" className='brand'>
                                           <img src={brand4}></img>
                                           
                                        </div>

                                        

                                        <div data-aos="flip-left" data-aos-duration="2000" className='brand'>
                                           <img src={brand6}></img>
                                           
                                        </div>

                                    </div>

                                     
                                </div>

                                <RestaurantCard name={"Best restaurants in the city"} 
                                    para={"Best restaurants according to the top surveys with best food and ambience"} />
                                

                            </div>

                        </div>



                        <div className={toggleState === 2 ? "content  active-content" : "content"}>
                            
                            <div className='type'>
                                <div className='filters'>
                                    <button>filter</button>
                                    <button>Pure veg</button>
                                    <button>Non Veg</button>
                                    <button>Italian</button>
                                    <button>Chinese</button>
                                </div>
                            </div>

                            

                            <div className='dining-restaurants'>

                                <h2>Explore the all new themes</h2>
                                <p>Here are the top restaurants for awesome dining</p>

                           

                                <div className='best-dining'>

                                    <div className='dining-image-card' data-aos="flip-left" data-aos-duration="2500">
                                         <img src={dining1}></img>
                                         <div className='dining-matter'>
                                            <div className='name'>
                                                <h1>Kava cafe</h1>
                                                <label>4.5<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></label>
                                            </div>
                                            <label>Estd 1987</label>
                                            <p>Enjoy the best dining experience with cool atmosphere enjoy the best dining experience with cool atmosphere</p>
                                            <button>Book a table</button>
                                         </div>
                                    </div>

                                    <div className='dining-image-card' data-aos="flip-left" data-aos-duration="2500">
                                         <img src={dining2}></img>
                                         <div className='dining-matter'>
                                            <div className='name'>
                                                <h1>swizze's</h1>
                                                <label>4<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></label>
                                            </div>
                                            <label>Estd 2007</label>
                                            <p>Enjoy the best dining experience with cool atmosphere enjoy the best dining experience with cool atmosphere</p>
                                            <button>Book a table</button>
                                         </div>
                                    </div>

                                    <div className='dining-image-card' data-aos="flip-left" data-aos-duration="2500">
                                         <img src={dining3}></img>
                                         <div className='dining-matter'>
                                            <div className='name'>
                                                <h1>albert's cafe</h1>
                                                <label>5<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></label>
                                            </div>
                                            <label>Estd 1970</label>
                                            <p>Enjoy the best dining experience with cool atmosphere enjoy the best dining experience with cool atmosphere</p>
                                            <button>Book a table</button>
                                         </div>
                                    </div>

                                    <div className='dining-image-card' data-aos="flip-left" data-aos-duration="2500">
                                         <img src={dining4}></img>
                                         <div className='dining-matter'>
                                            <div className='name'>
                                                <h1>dessertino</h1>
                                                <label>5<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></label>
                                            </div>
                                            <label>Estd 1987</label>
                                            <p>Enjoy the best dining experience with cool atmosphere enjoy the best dining experience with cool atmosphere</p>
                                            <button>Book a table</button>
                                         </div>
                                    </div>

                                </div>
                            </div>

                            <RestaurantCard name={"Here are the top most recommendation"}
                                para={"We are suggesting the best places to have a good dining with your loved one"} />
                            

                        </div>

                        <div className={toggleState === 3 ? "content  active-content" : "content"}>
                            
                            <div className='type'>
                                <div className='filters'>
                                    <button>filter</button>
                                    <button>Pure veg</button>
                                    <button>Non Veg</button>
                                    <button>Italian</button>
                                    <button>Chinese</button>
                                </div>
                            </div>

                            

                            <RestaurantCard name={"Top night happening places in the city"}
                                para={"Choose a most budget friendly and happening places of you choice"} />
                            

                        </div>

                    </div>

                </div>
        </div> 

        <Info/>
        
    </div>
  )
}

export default OrderPage