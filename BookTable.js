import React from 'react';
import image from '../assets/booktable.avif';
import './BookTableStyles.css';
import Info from '../components/Info';
import google from '../assets/google.png';

function BookTable() {
  return (
    <div className='book-table'>
        <div className='image'>
            <img src={image}></img>
        </div>

        <div className='booking-form'>
           <h1>Book a table</h1>
           <div className='form'>

             <div className='person'>
               <input className='input' type="text" placeholder='enter your name' required ></input>
             </div>
             <div className='person'>
               <input className='input' type="number" placeholder='phone number' required ></input>
               <i class="fa-solid fa-phone-flip"></i>
             </div>
             <div className='person'>
               <input className='input' type="email" placeholder='email id' ></input>
               <i class="fa-solid fa-envelope"></i>
             </div>
             <div className='person'>
               <input className='input' type="text" placeholder='data of booking' required ></input>
               <i class="fa-solid fa-calendar-days"></i>
             </div>
             <div className='person'>
               <input className='input' type="text" placeholder='time of booking' required ></input>
               <i class="fa-solid fa-clock"></i>
             </div>
             <div className='person'>
               <input className='input' type="number" placeholder='no of persons' ></input>
               <i class="fa-solid fa-users"></i>
             </div>

             <button>Book table</button>

             <div className='google'>
               <p>Book using<img src={google}></img></p>
             </div>

             <div className='icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                </div>
           </div>
        </div>

        <Info/>
    </div>
  )
}

export default BookTable