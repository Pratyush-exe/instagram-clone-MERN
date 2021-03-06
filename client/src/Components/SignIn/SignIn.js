import React from 'react'
import './SignIn.css'

function handleSignIn(e) {
    let in1 = document.getElementById('fullname')
    let in2 = document.getElementById('username')

    if (in1.value == "" || in2.value == "") {
        alert("Fields are empty !")
    }
}

function SignIn({isSignUp, setSignUp}) {
  return (
    <div className='creds-form-signup-cont'>
        <div className='creds-form-signup'>
            <img style={{paddingBottom: '5px'}} src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
            <p style={{textAlign: 'center', fontSize: '18px', padding: '10px', paddingBottom: '20px'}}>Sign up to see photos and videos from your friends.</p>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input id="fullname" style={{width: '300px' , height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Full name' />
                <input id="username" style={{width: '300px' , height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Username' />
                <button onClick={handleSignIn} style={{width: '310px' , height: '30px', marginBottom: '5px'}}>SignIn with Google</button>
            </div>
            <p style={{textAlign: 'center', fontSize: '12px', padding: '10px'}}>People who use our service may have uploaded your contact information to Instagram. 
                <p style={{fontWeight: 'bold'}}>Learn More</p>
            </p>
            <p style={{textAlign: 'center', fontSize: '12px', padding: '10px'}}>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', border: '1px solid lightgray', justifyContent: 'center'}}>
            <p>Have an account?</p><p className='login-bt' onClick={()=>setSignUp(true)}>Log in</p>
        </div>
    </div>
  )
}

export default SignIn