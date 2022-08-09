import React, { useEffect } from 'react'
import './SignUp.css'
import jwt_decode from 'jwt-decode'

function handleSignUp(e) {
    let in1 = document.getElementById('username-signup')

    if (in1.value == "") {
        alert("Fields are empty !")
    }
}

function handleCallback(response) {
    console.log(response)
    console.log(jwt_decode(response["credential"]))
}

function SignUp({isSignUp, setSignUp}) {
    useEffect(() => {
        /*global google*/ 
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_CLIENT_ID,
            callback: handleCallback
        })
    
        google.accounts.id.renderButton(
            document.getElementById("SignUp_button"),
            {
                theme: "outline", size: "large"
            }
        )
    }, [])

    return (
    <div className='creds-form-signup-cont'>
        <div className='creds-form-signup'>
            <img style={{paddingBottom: '20px'}} src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input id="username-signup" style={{ width: '300px', height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Username' />
                {/* <button onClick={handleSignUp} style={{ width: '310px', height: '30px', marginBottom: '5px'}}>Login Google</button> */}
                <div id='SignUp_button' style={{ width: '310px', height: '30px', marginBottom: '5px', display: 'flex', justifyContent: 'center'}}></div>
            </div>
            <p id="forgot">Forgot username?</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', border: '1px solid lightgray', justifyContent: 'center'}}>
            <p>Don't have an account?</p><p className='login-bt' onClick={()=>setSignUp(false)}>Sign Up</p>
        </div>
    </div>
    )
}

export default SignUp