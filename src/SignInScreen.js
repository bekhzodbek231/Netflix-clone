import React from 'react'
import "./SignInScreen.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useRef } from 'react';
import { auth } from "./firebase"

function SignInScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
 
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth,
      emailRef.current.value,
      passwordRef.current.value

    ).then((Authuser) => {
      console.log(Authuser);
    }).catch((err) => {
      alert(err.message)
    });
    
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,
      emailRef.current.value,
      passwordRef.current.value

    ).then((Authser) => {
      console.log(Authser);
    }).catch((err) => {
      alert(err.message)
    });

  }


  return (
    <div className='signInScreen'>
        <form>
       <h1>Sign In </h1>
       <input ref={emailRef} type="email" placeholder='Email' />
       <input ref={passwordRef} type="password" placeholder='Password'/>
       <button onClick={signIn}>Sign In</button>

       <h4>
        <span className='signInScreen__gray'>New to Netflix?    </span>
        <span className='signInScreen__link' onClick={register}>Sign Up now.</span>
        </h4>

        </form>
    </div>
  )
}

export default SignInScreen
