import React, { useEffect } from 'react'
import '../components/HomeStyles.css'
import Info from '../components/Info';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import {cities, arrow} from '../components/Cities';





function Home() {
  useEffect=(() => {
    Aos.init({duration:2000});
  },[]);
  return (
    <div className='home-page'>
      <div className='image'>
        <img src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'></img>
      </div>
      <div className='heading'>
        <h2>order food online on</h2>
        <h3>Delicacies</h3>
      </div>
      

      <div className='content'>
        <h1>Locations we serve in <span>INDIA</span></h1>
        <div className='boxes'>
            <ul>{cities.map((city, index) => {
                return(
                <li data-aos="fade-up" data-aos-duratino="2000" key={index}>
                    <Link className='link' to='/order' >
                      <p >{city}<h5>restaurants</h5></p><ion-icon name="arrow-forward-outline"></ion-icon>
                    </Link>
                  </li>
                )})}
            </ul>
        </div>
      </div>

      <Info/>     
    </div>
  )
}

export default Home