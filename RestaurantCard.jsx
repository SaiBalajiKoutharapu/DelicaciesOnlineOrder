import React from 'react';
import './RestaurantCardsStyles.css';
import {restaurants} from '../components/Restaurants';
import { Link } from 'react-router-dom';


function RestaurantCard(props) {
  return (
    <div className='cards-content'>
        <h3>{props.name}</h3>
        <p>{props.para}</p>
        <div className='cards'>
                {
                    restaurants.map((restaurant) => {
                        return(
                            <div className='card' data-aos="fade-up" data-aos-duration="1500">
                                <img src={restaurant.image}></img>
                                <div className='head'>
                                    <h1>{restaurant.name}</h1>
                                    <label>
                                      <i className={restaurant.star1}></i>
                                      <i className={restaurant.star2}></i>
                                      <i className={restaurant.star3}></i>
                                      <i className={restaurant.star4}></i>
                                      <i className={restaurant.star5}></i>
                                    </label>
                                </div>
                                <p>The best authentic food from the top rated chef's with from the top rated chef's with awesome sprint and love </p>
                                <div className='card-data'>
                                    <h2>{restaurant.menu}</h2>
                                    <p>{restaurant.price}</p>
                                </div>
                                <Link className='link' to='/restaurantfoodmenu' >
                                    order here
                                </Link>
                            </div>
                        )
                    })
                }

        </div>
    </div>
  )
}

export default RestaurantCard