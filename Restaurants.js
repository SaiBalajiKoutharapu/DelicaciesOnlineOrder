import React, { useEffect } from 'react';
import '../components/Restaurantstyles.css';
import delivery from '../assets/delivery.png';
import register from '../assets/register.png';
import orders from '../assets/orders.png';
import { Link } from 'react-router-dom';
import {cities, arrow} from '../components/Cities';
import Info from '../components/Info';

function Restaurants() {

  return (
    <>
    <div className='add-restaurant'>

      <div className='top-head'>

        <div className='image'>
           <img src='https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'></img>
        </div>
         <p>Partner with Zomato<br/>
          at 0% commission for the 1st month!</p>

          <label>And get ads worth INR 1500. Valid for new restaurant partners in selected cities.</label>

           <div className='add'>
             <button>Register your restaurant</button>
             <span> Login to your restaurant</span>
           </div>
      </div>

      <div className='documents-require'>
        <h1 className='head'>Get started with online ordering</h1>
        <p>Please keep the documenst ready for a smooth signup</p>

        <div data-aos="flip-left" data-aos-duration="2000" className='documents'>
           <div className='doc'>
             <i class="fa-solid fa-circle-check"></i><p>FSSAI License copy</p>
           </div>

           <div className='doc'>
             <i class="fa-solid fa-circle-check"></i><p>Regular GST In</p>
           </div>

           <div className='doc'>
             <i class="fa-solid fa-circle-check"></i><p>Your restaurant menu</p>
           </div>

           <div className='doc'>
             <i class="fa-solid fa-circle-check"></i><p>PAN card copy</p>
           </div>

           <div className='doc'>
             <i class="fa-solid fa-circle-check"></i><p>Bank account details</p>
           </div>

           <div className='doc'>
             <i class="fa-solid fa-circle-check"></i><p>Any 5 dish images</p>
           </div>

        </div>
      </div>


      <div data-aos="fade-up" data-aos-duration="3000"  className='partner'>
              <h2>Why should you partner with us ?</h2>
              <p data-aos="fade-up" >Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</p>
               
              <div data-aos="fade-up"  className='commodities'>
                  <div className='commodity'>
                      <i class="fa-solid fa-earth-americas"></i><p>1000+ cities <br/> in INDIA</p>
                  </div>

                  <div className='commodity'>
                      <i class="fa-sharp fa-solid fa-shop"></i><p>3 Lakh+ <br/> restaurants</p>
                  </div>

                  <div className='commodity'>
                      <i class="fa-light fa-calendars"></i><p>5 crore+ <br/> monthly orders</p>
                  </div>
              </div>
      </div>

      <div className='works'>
              <p>How it works ?</p>

            <div  className='process'>

                 <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='box'>
                    <img src={register}></img>
                    <h1>Step 1</h1>
                    <h2>Create your page on zomato</h2>
                    <p>Help users discover your place by creating a listing on Zomato</p>
                 </div>

                 <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"  className='box'>
                    <img className='deliver' src={delivery}></img>
                    <h1>Step 2</h1>
                    <h2>Register for online ordering</h2>
                    <p>And deliver orders to millions of customers with ease</p>
                 </div>

                 <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"   className='box'>
                    <img src={orders}></img>
                    <h1>Step 3</h1>
                    <h2>Start receiving orders online</h2>
                    <p>Manage orders on our partner app, web dashboard or API partners</p>
                 </div>
 
            </div>

      </div>

      <div className='cities'>
         <h1>Currently we are in</h1>
        <div className='city'>

        <ul>{cities.map((city, index) => {
                return(
                <li key={index}>
                    <Link className='link' to='/order' >
                      <p >{city}</p>
                    </Link>
                  </li>
                )})}
            </ul>
        </div>
      </div>

    </div>

    <Info/>
     
  </>
  )
}

export default Restaurants