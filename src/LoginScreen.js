import React from 'react';
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen"
import { useState} from 'react';


function LoginScreen() {

  const [signIn, setSignIn] = useState(false);


  return (
    <div className='loginScreen'>

    

      <div className="loginScreen__background">
        <img className='loginScreen__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <button onClick={() => setSignIn(true)} className='loginScreen__button'>Sign In</button>

        <div className='loginScreen__gradient' />
      </div>

     <div className="loginScreen__body">

       {signIn ? (
        <SignInScreen />
       ):(
         <>
      <h1>Unlimited Films, TV programmes, and more.</h1>
      <h2>Watch anywhere. Cancel at any time.</h2>
      <h3>Ready to watch? Enter your Email to create or restart your membership.</h3>
      <div className="loginScreen__input">
        <form >
           <input type="email" placeholder='Email Address'/>
           <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>GET STARTED</button>
        </form>
      </div>

      </>
       )}

      
     </div>

    </div>
  )
}


export default LoginScreen;
