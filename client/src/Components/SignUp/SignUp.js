import React from 'react'
import './SignUp.css'

function SignUp({isSignUp, setSignUp}) {
  return (
    <div className='creds-form-signup-cont'>
        <div className='creds-form-signup'>
            <img style={{paddingBottom: '20px'}} src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input style={{ width: '300px', height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Username' />
                <button style={{ width: '310px', height: '30px', marginBottom: '5px'}}>Login Google</button>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', border: '1px solid lightgray', justifyContent: 'center'}}>
            <p>Have an account?</p><p className='login-bt' onClick={()=>setSignUp(false)}>Log in</p>
        </div>
    </div>
  )
}

export default SignUp