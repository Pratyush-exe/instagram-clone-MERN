import React, {useEffect, useState} from 'react'
import './SignUp.css'
import jwt_decode from 'jwt-decode'
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

function SignIn({isSignUp, setSignUp}) {

    const [error, seterror] = useState("")

    useEffect(() => {
        /*global google*/ 
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_CLIENT_ID,
            callback: handleCallback
        })
    
        google.accounts.id.renderButton(
            document.getElementById("Signup_button"),
            {theme: "outline", size: "medium", text: "signup_with", width: "312px"}
        )
    }, [])

    async function handleCallback(response) {
        let in1 = document.getElementById('fullname')
        let in2 = document.getElementById('username')
        let in3 = document.getElementById('password')
    
        if (in1.value === "" || in2.value === "" || in3.value === "") seterror("Some fields are empty.")
        else {
            let user = jwt_decode(response["credential"])
            let signedUpUser = {
                name: in1.value,
                email: user["email"],
                userName: in2.value,
                password: in3.value,
                defaultPicture: user["picture"],
                clientId: response["clientId"],
                followers: [],
                following: []
            }
            await API.post('/user/signup', signedUpUser)
                .then(response => {
                    setSignUp(false)
                })
                .catch(e => {
                    console.log(e.response["data"])
                    seterror(e.response["data"])
                })
        }
    }

    return (
        <div className='creds-form-signup-cont'>
            <div className='creds-form-signup'>
                <img style={{paddingBottom: '5px'}} src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
                <p style={{textAlign: 'center', fontSize: '18px', padding: '10px', paddingBottom: '20px'}}>Sign up to see photos and videos from your friends.</p>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <input id="fullname" style={{width: '300px' , height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Full name' />
                    <input id="username" style={{width: '300px' , height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Username' />
                    <input id="password" style={{width: '300px' , height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Create password' />
                    <div id='Signup_button' style={{ width: '310px', height: '30px', marginBottom: '5px', display: 'flex', justifyContent: 'center'}}></div>
                </div>
                <p style={{textAlign: 'center', fontSize: '12px', padding: '10px', paddingBottom: "0px", marginBottom: "0px"}}>People who use our service may have uploaded your contact information to Instagram. 
                    <p style={{fontWeight: 'bold'}}>Learn More</p>
                </p>
                <p style={{textAlign: 'center', fontSize: '12px', padding: '10px', paddingTop: "0px", marginTop: "0px"}}>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                <div style={{color: "red", width: "250px", textAlign: "center", fontSize: "small"}}>{error}</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', border: '1px solid lightgray', justifyContent: 'center'}}>
                <p>Have an account?</p><p className='login-bt' onClick={()=>setSignUp(false)}>Log in</p>
            </div>
        </div>
    )
}

export default SignIn