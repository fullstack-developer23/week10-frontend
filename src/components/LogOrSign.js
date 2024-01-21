import React from 'react';
import "./LogOrSign.css";
import { SignUp } from './SignUp';
import { Login } from './Login';

function LogOrSign({setLoggedIn}) {
  return (
    <div className='logorsign-wrapper'>

        <div className='logorsign-inner-container'>

            <SignUp />

        </div>

        <div className='logorsign-inner-container'>
              
            <Login setLoggedIn={setLoggedIn} />
            
        </div>

    </div>
  )
}

export default LogOrSign;