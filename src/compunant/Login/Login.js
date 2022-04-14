import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css'
import auth from './../../firebase.init';


const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [comfram,setConfram]=useState('');
    const [errors,setErrors]=useState('');
    const navigate=useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    

    const handleEmail=(e)=>{
     setEmail(e.target.value);
   

    }
    const handlepass=(e)=>{
        setPassword(e.target.value)

    }
    const handleConfram=(e)=>{
        setConfram(e.target.value)

    };
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
 
    const submitControl=(e)=>{
        e.preventDefault();
        if(error){
            return setErrors( <p>Error: {error.message}</p>)
           
        }
      
        if (user) {
            navigate(from, { replace: true });
            return setErrors(" Login Sucess")
          }
        signInWithEmailAndPassword(email, password)
      
    }
  
    return (
        <div>
            <form className='form' onSubmit={submitControl} >
                <label htmlFor="Email">Email</label>
                <br />
                <input type='email' onBlur={handleEmail}></input>
                <br />
                <label htmlFor="pass">Password</label>
                <br />
                <input type='password'onBlur={handlepass}></input>
                <br />
               
                <br />
                <button type='submit'>Login</button><br /><br /><br />
                <Link to="/singup" >Sing UP</Link>
                <h2>{errors}</h2>
            </form>
            
        </div>
    );
};

export default Login;