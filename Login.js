import React, { useState } from 'react'
import '../components/LoginStyles.css'
import Info from '../components/Info';
import AOS from 'aos';


function Login() {

   const [toggle, setToggle] = useState(1)
   
   function updateToggle(id){
      setToggle(id)
   }

   
  return (
   <>
    <div className='login-page'>
      <div  data-aos="flip-left"  className='login-box'>
        
         <div className='right-side'>

           <div className='image'>
              <img src='https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'></img>
           </div>

           <div className='matter'>
              <h3>zomato</h3>
              <p>welcomes you</p>
              <h4>Upto 50% Off</h4>              
           </div>
         </div>
          
         <div className='left-side'>

            <div className='tabs-block'>
               <label className={toggle === 1 ? "tabs active-tabs" : "tabs"} onClick={() => updateToggle(1)} >Login</label>
               <label className={toggle === 2 ? "tabs active-tabs" : "tabs"} onClick={() => updateToggle(2)} >register</label>
            </div>


            <div  className= {toggle === 1 ? "show-login-data" : "login-data"}>

               <div className='data-required'>

                  <div className='head'>
                     <label>welcome back </label>
                     <p>sign in to your account</p>
                  </div>

                  <div className= "login-form"> 
                  
                     <label>userName</label><br/>
                     <div className='enter'>
                        <i class="fa-solid fa-user"></i>
                        <input type='text'></input><br/>
                     </div>
                                  
                     <label>password</label><br/>
                     <div className='enter'>
                        <i class="fa-solid fa-lock"></i>
                        <input type='password'></input><br/>
                     </div>

                  </div>

                  <div className='inform'>
                     <h1>forgot password ?</h1>
                  
                     <div className='submit'>
                        <button>Login</button>
                     </div>

                     <div className='login-link'>
                        <p>Doesn't have an account ! <a>register</a></p>
                     </div>
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




            <div  className= {toggle === 2 ? "show-login-data" : "login-data"}>
                <div className='data-required'>

                  <div className='head'>
                     <label>welcome to Delicacies</label>
                     <p>Register here</p>
                  </div>

                  <div className= "login-form"> 
                  
                     <label>userName</label><br/>
                     <div className='enter'>
                        <i class="fa-solid fa-user"></i>
                        <input type='text'></input><br/>
                     </div>
                                  
                     <label>password</label><br/>
                     <div className='enter'>
                        <i class="fa-solid fa-lock"></i>
                        <input type='password'></input><br/>
                     </div>

                     <label>Re-enter password</label><br/>
                     <div className='enter'>
                        <i class="fa-solid fa-lock"></i>
                        <input type='password'></input><br/>
                     </div>

                  </div>

                  <div className='inform'>

                     <h1>Terms and conditions</h1>
                  
                     <div className='submit'>
                        <button>Register</button>
                     </div>

                     <div className='login-link'>
                        <p>Already have an account ! <a>Login</a></p>
                     </div>

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

      </div>
      
    </div>
    <Info/>
    </>
  )
}

export default Login