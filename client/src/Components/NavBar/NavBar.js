import React, {useState} from 'react'
import CreatePost from '../CreatePost/CreatePost'
import "./NavBar.css"
import {HomeOutline, MessengerOutline, AddOutline, CompassOutline, LoveOutline} from '../../images/svg'

function NavBar() {
    const [createPost, setCreatePost] = useState(false)

    return (
    <nav className='navbar'>
        <div className='navbar-inner'>
            <h3>Instagram Clone</h3>
            <div className='navbar-options'>
                <div className='nav-icons'><HomeOutline  /></div>
                <div className='nav-icons'><MessengerOutline  /></div>
                <div className='nav-icons' onClick={() => setCreatePost(true)}><AddOutline  /></div>
                <div className='nav-icons'><CompassOutline  /></div>
                <div className='nav-icons'><LoveOutline  /></div>
                <button onClick={()=>{
                    localStorage.removeItem("INSTAGRAM-CURRENT-USER")
                    window.open("/", "_self")
                }}>LOGOUT</button>
            </div>
            <CreatePost trigger={createPost} setTrigger={setCreatePost}/>
        </div>
    </nav>
    )
}

export default NavBar