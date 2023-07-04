import React from 'react';
import './HowItWorksStyles.css';

import delivery from '../assets/delivery.png';
import register from '../assets/register.png';
import orders from '../assets/orders.png';

function HowItWorks() {
  return (
    
        <div className='works'>
              <p>How it works ?</p>

            <div className='process'>

                 <div className='box'>
                    <img src={register}></img>
                    <h1>Step 1</h1>
                    <h2>Create your page on zomato</h2>
                    <p>Help users discover your place by creating a listing on Zomato</p>
                 </div>

                 <div className='box'>
                    <img className='deliver' src={delivery}></img>
                    <h1>Step 2</h1>
                    <h2>Register for online ordering</h2>
                    <p>And deliver orders to millions of customers with ease</p>
                 </div>

                 <div className='box'>
                    <img src={orders}></img>
                    <h1>Step 3</h1>
                    <h2>Start receiving orders online</h2>
                    <p>Manage orders on our partner app, web dashboard or API partners</p>
                 </div>
 
            </div>

        </div>
    
  )
}

export default HowItWorks