import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SingUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init'; 



const SingUp = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [comfram,setConfram]=useState('');
    const [eroors,setEroors]=useState('');
    const navigate=useNavigate()
   


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
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
 
     const submitControl=(e)=>{
        e.preventDefault();
        if(password !==comfram){
          
            setEroors("COMFROM pASSWORD nOT MATCH");
            return;
        }
        if(error){
            return  setEroors( <p>Error: {error.message}</p>)
           
        }
        if (user) {
            navigate('/login')
            return setEroors(" Login Sucess")
          }
        createUserWithEmailAndPassword(email, password)
        setEmail('');
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
                <label htmlFor="conf">Confrom Password</label>
                <br />
                <input type='password'onBlur={handleConfram}></input>
                <br />
                <button type='submit'>Sing Up</button>
                <br /><br /><br />
                <Link to="/login" >Allready SingUp</Link>
                 <h2> {eroors}</h2>
            </form>
            
        </div>
    );
};

export default SingUp ;