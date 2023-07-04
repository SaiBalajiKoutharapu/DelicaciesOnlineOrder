import React from 'react'
import './InfoStyles.css';

function Info() {
  return (
    <div   className='info'>
        <div className='info-data'>

            <div className='headings'>
                <h1>Delicacies</h1>
                <div className='general'>
                    <p>india</p>
                    <p>english</p>
                </div>
            </div>

            <div className='data'>


                <div className='about-zomato'>
                    <div className='head'>
                        <h2>about </h2>
                    </div>
                    <div className='media'>
                        <p>who we are</p>
                        <p>blog</p>
                        <p>work with us</p>
                        <p>relations</p>
                        <p>report fraud</p>
                        <p>contact us</p>
                    </div>
                </div>


                <div className='about-zomato'> 
                    <div className='head'>
                        <h2>Ourverse</h2>
                    </div>
                    <div className='media'>
                        
                        <p>blinked</p>
                        <p>feeding india</p>
                        <p>hyperpure</p>
                        <p>Deliland</p>
                        <p>contact us</p>
                    </div>
                </div>


                <div className='about-zomato'>
                    <div className='head'>
                        <h2>for restaurants</h2>
                    </div>
                    <div className='media'>
                        <p>partner with us </p>
                        <p>apps for you</p>
                        <p>enterprise</p>
                    </div>
                </div>


                <div className='about-zomato'>
                    <div className='head'>
                        <h2>learn more</h2>
                    </div>
                    <div className='media'>
                        <p>privacy</p>
                        <p>security</p>
                        <p>terms</p>
                        <p>sitemap</p>
                    </div>
                </div>


                <div className='about-zomato'>
                    <div className='head'>
                        <h2>social media links</h2>
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

        </div>

        <div className='copyright'>
            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. sai balaji koutharapu - Delicacies. All rights reserved.</p>
        </div>

    </div>
    
  )
}

export default Info