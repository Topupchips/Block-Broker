import React from "react";
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () => {
  return(
    <div className="Wrapper">
        <form action="">
            <h1> Login</h1>
            <div className="Input-box">
                <input type="text" placeholder="Username" required/>
                <FaUser className="icon" />
            </div>
            <div className="Input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon" />
            </div>
            <div className="Remember-forgot">
                <label> <input type="checkbox" />
                Remember me
                </label> 
                <a href="#">Forgot Password?</a>  
             </div>

             <button type="submit">Login</button>

             <div className="register-link">
                <p>Don't have an account?
                    <a href="#"> Register here</a>
                </p>
             </div>
            </form> 
    
        
         </div>
  );
};

export default LoginForm;  