import React, { useEffect } from 'react'
import './SignIn.css'
import jwt_decode from 'jwt-decode'
import { Outlet, Link } from "react-router-dom"
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

async function handleLoginWup(e) {
    let in1 = document.getElementById('username-signup')
    let in2 = document.getElementById('password-signup')

    if (in1.value == "") alert("username is empty !")
    else if (in2.value == "") alert("password is empty !")
    else {
        let signedInUser = {
            userName: in1.value,
            password: in2.value,
            email: "none"
        }
        let resp = await API.post('/user/signin', signedInUser)
        localStorage.setItem("INSTAGRAM-CURRENT-USER", JSON.stringify(resp.data["result"]))
        console.log(resp.data["result"])
    }
}

async function handleCallbackGoogle(response) {
    let user = jwt_decode(response["credential"])
    let signedInUser = {
        userName: "",
        password: "",
        email: user["email"]
    }
    let resp = await API.post('/user/signin', signedInUser)
    console.log(resp.data["result"])
}

function SignUp({isSignUp, setSignUp}) {
    useEffect(() => {
        /*global google*/ 
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_CLIENT_ID,
            callback: handleCallbackGoogle
        })
    
        google.accounts.id.renderButton(
            document.getElementById("Signin_button"),
            {theme: "outline", size: "medium", text: "signin_with", width: "312px"}
        )
    }, [])

    return (
    <div className='creds-form-signup-cont'>
        <div className='creds-form-signup'>
            <img style={{paddingBottom: '20px'}} src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <input id="username-signup" style={{ width: '300px', height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Username' />
                <input id="password-signup" style={{ width: '300px', height: '30px', marginBottom: '5px', paddingLeft: '5px'}} type={"text"} placeholder='Password' />
                <button onClick={handleLoginWup} style={{ width: '310px', height: '30px', marginBottom: '5px'}}>Login</button>
                <div style={{display: 'flex', "flexDirection": "row", position: 'relative', "justifyContent": "center", "alignItems": "center", "margin": "0 20px"}}>
                    <div style={{width: "40%", height: "1px", backgroundColor: "lightgray"}}></div>
                    <div style={{"fontSize":"small", "margin": "10px 20px"}}>OR</div>
                    <div style={{width: "40%", height: "1px", backgroundColor: "lightgray"}}></div>
                </div>
                <div id='Signin_button' style={{ width: '310px', height: '30px', marginBottom: '5px', display: 'flex', justifyContent: 'center'}}></div>
            </div>
            <p id="forgot">Forgot password?</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', border: '1px solid lightgray', justifyContent: 'center'}}>
            <p>Don't have an account?</p><p className='login-bt' onClick={()=>setSignUp(true)}>Sign Up</p>
        </div>
    </div>
    ) 
}

export default SignUp