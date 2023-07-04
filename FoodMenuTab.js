import React from 'react';
import './FoodMenuTabStyles.css';

import foodmenu from '../assets/foodmenu.avif';
import menu1 from '../assets/menu1.jpg';
import menu2 from '../assets/menu2.jpg';
import menu3 from '../assets/menu3.jpg';
import menu4 from '../assets/menu4.jpg';

function FoodMenuTab() {
  return (
    <div className='food-menu'>
        <div className='menu'>
            <img src={menu1}></img>
            <img src={menu3}></img>
            <img src={menu2}></img>
            <img src={menu4}></img>
            <img src={menu3}></img>
            <img src={menu1}></img>
            <img src={menu4}></img>
            <img src={menu2}></img>
            <img src={menu1}></img>
            <img src={menu3}></img>
            <img src={menu2}></img>
            <img src={menu4}></img>
           
        </div>
    </div>
  )
}

export default FoodMenuTab