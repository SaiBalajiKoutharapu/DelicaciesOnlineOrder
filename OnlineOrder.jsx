import React from 'react';
import './OnlineOrderStyles.css';
import {items } from '../components/OnlineOrderItemsContent';

function OnlineOrder() {
  return (
    <div className='online-order'>
        <div className='main-menu'>
          <div className='quick-menu'>
             <h1>Recommended(21)</h1>
             <div className='card'>
               <h6>super saver pack (Serves 3-4)</h6>
               <h6>barbeque in a box (Serves 2-3)</h6>
               <h6>barbeque in a box (Serves 3-4)</h6>
               <h6>starters and kebabs platter</h6>
               <h6>meals combos and thalis</h6>
               <h6>biryanis curries and rotis</h6>
               <h6>pizza, burgers and nuggets</h6>
               <h6>all in one pack (Serves-4-5) </h6>
             </div>
          </div>
          <div className='menu-items'>
             <div className='cards'>
               {
                items.map(item => {
                  return(
                    <div data-aos="fade-up" data-aos-duratino="2000" className='item-card'>
                       <div className='image'>
                         <img src={item.image}></img>
                       </div>
                       <div className='matter'>
                         <h1>{item.name}</h1>
                         <div className='tags'>
                            <p>{item.tag}</p>
                            <p>{item.supportingTag}</p>
                          </div>
                          <h3>{item.price}</h3>
                          <p>{item.listing}</p>
                          <div className='addtocart'>
                            <i className={item.minus}></i>
                            <label>{item.cart}</label>
                            <i className={item.add}></i>
                          </div>
                       </div>
                    </div>
                  )
                })
               }
             </div>
          </div>
        </div>
    </div>
  )
}

export default OnlineOrder