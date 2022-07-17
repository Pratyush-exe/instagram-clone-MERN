import React, {useState} from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import './Home.css'

function Home() {

    const [isSignUp, setSignUp] = useState(false)

    return (
        <div className='home-creds'>
            <div className='creds-content'>
                <img src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png" />
                { isSignUp && <SignUp isSignUp={isSignUp} setSignUp={setSignUp}/>}
                { !isSignUp && <SignIn isSignUp={isSignUp} setSignUp={setSignUp}/>}
            </div>
            <div className='creds-footer'>
                <div className='footer'>
                    <p className='footer-text'>Meta</p>
                    <p className='footer-text'>About</p>
                    <p className='footer-text'>Blog</p>
                    <p className='footer-text'>Jobs</p>
                    <p className='footer-text'>Help</p>
                    <p className='footer-text'>API</p>
                    <p className='footer-text'>Privacy</p>
                    <p className='footer-text'>Terms</p>
                    <p className='footer-text'>Top Accounts</p>
                    <p className='footer-text'>Hashtags</p>
                    <p className='footer-text'>Locations</p>
                    <p className='footer-text'>Instagram Lite</p>
                    <p className='footer-text'>Contact Uploading & Non-Users</p>
                </div>
                <div className='footer'>
                    <p className='footer-text'>Dance</p>
                    <p className='footer-text'>Food & Drink</p>
                    <p className='footer-text'>Home & Garden</p>
                    <p className='footer-text'>Music</p>
                    <p className='footer-text'>Visual Arts</p>
                </div>
                <div className='footer'>
                    <p className='footer-text'>English</p>
                    <p className='footer-text'>© 2022 Instagram from Meta</p>
                </div>
            </div>
        </div>
    )
}

export default Home