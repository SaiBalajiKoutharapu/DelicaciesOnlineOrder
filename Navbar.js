import React, { Component } from 'react';
import {MenuItems } from './NavbarItems';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    state = {clicked : false};

    handleclick = () =>{
        this.setState({clicked : !this.state.clicked})
    }
    
  render() {
    return (
      <div className='navbar-main'>
        <div className='navbar'>
            <div className='navbar-logo'>
                <h1>Delicacies</h1> 
            </div>

            <div className='menu-icons' onClick={this.handleclick} >
                <i class={this.state.clicked ? "fa-solid fa-xmark" : "fa-sharp fa-solid fa-bars" }></i>
            </div>

            <div className='navbar-items'>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        MenuItems.map((item, index) => {
                            return(
                                <li key={index} >
                                   {/* <i className={item.icon} ></i> */}
                                    <Link className="links" to={item.url}> <h4>{item.title}</h4> </Link>
                                   
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Navbar