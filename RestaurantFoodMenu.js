import React, { useState } from 'react';
import './RestaurantFoodMenuStyles.css';
import Info from '../components/Info';
import FoodMenuTab from './FoodMenuTab';
import {Link} from 'react-router-dom';


import chicken from '../assets/chicken.avif';
import starters from '../assets/starters.avif';
import chinese from '../assets/chinese.avif';
import pizza from '../assets/pizza.avif';
import salads from '../assets/salads.avif';
import rest1 from '../assets/rest1.avif';
import rest2 from '../assets/rest2.avif';
import rest3 from '../assets/rest3.avif';
import rest4 from '../assets/rest4.avif';
import rest5 from '../assets/rest5.avif';
import rest6 from '../assets/rest6.avif';
import rest7 from '../assets/rest7.avif';
import rest8 from '../assets/rest8.avif';
import rest9 from '../assets/rest9.avif';
import rest10 from '../assets/rest10.avif';
import slide1 from '../assets/slide1.avif';
import slide2 from '../assets/slide2.avif';
import slide3 from '../assets/slide3.avif';
import slide4 from '../assets/slide4.avif';
import slide5 from '../assets/slide5.avif';
import slide6 from '../assets/slide6.avif';
import slide7 from '../assets/slide7.avif';
import slide8 from '../assets/slide8.avif';
import RestaurantFoodGallery from './RestaurantFoodGallery';
import OnlineOrder from './OnlineOrder';




function RestaurantFoodMenu() {


  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className='restaurantMenu' >

      <div className='page-content'>
 
        <div className='top-head'>
          <div className='image1'>
            <img src={chicken}></img>
          </div>

          <div className='images'>

            <div className='image'>
              <img src={starters}></img>
            </div>
            <div className='image'>
              <img src={chinese}></img>
            </div>
            <div className='image'>
              <img src={pizza}></img>
            </div>
            <div className='image'>
                <img src={salads}></img>
            </div>

          </div>
        </div>

        <div className='restaurant-details'>
          <div className='address'>
             <div className='add'>
                <h1>Heera Fusion Family Restaurant</h1>
                <p>Pb siddhartha college road, siddhartha nagar</p>
                <label>Biranis,Indin breads,Tandoori,Chinese,Continental,</label>
             </div>
             <div className='left'>
               <div className='review'>
                  <i class="fa-solid fa-location-dot"></i>
                  <i class="fa-solid fa-image"></i>
                  <label>4.5<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></label> 
               </div>
               <div className='contact'>
                  <i class="fa-solid fa-phone-volume"></i>
                  <label>+91 8467895148</label>
               </div>
             </div>
          </div>
          
        </div>

        <div className='options'>

          <div className='tabs-block'>
            <div className='tabs'>
              <button className={toggle === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab(1)} >Order Online</button>
              <button className={toggle === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab(2)} >Food Menu</button>
              <button className={toggle === 3 ? "tab active-tab" : "tab"} onClick={() => toggleTab(3)} >Gallery</button>
              {/* <button className={toggle === 4 ? "tab active-tab" : "tab"} onClick={() => toggleTab(4)} >Reviews</button>
              <button className={toggle === 5 ? "tab active-tab" : "tab"} onClick={() => toggleTab(5)} >Reach us</button> */}
            </div>
          </div>

          <div className='content-block'>

            <div className={toggle === 1 ? "content  active-content" : "content"}>
              <OnlineOrder/>
            </div>

            <div className={toggle === 2 ? "content  active-content" : "content"}>
              <FoodMenuTab/>
            </div>

            <div className={toggle === 3 ? "content  active-content" : "content"}>
              <RestaurantFoodGallery/>
            </div>

            {/* <div className={toggle === 4 ? "content  active-content" : "content"}>
              <h1>reviews</h1>
            </div>

            <div className={toggle === 5 ? "content  active-content" : "content"}>
              <h1>Reach us</h1>
            </div> */}
            
          </div>
        </div>


      </div>

      <Info/>
    </div>
  )
}

export default RestaurantFoodMenu