import React, {useState} from 'react'
import CreatePost from '../CreatePost/CreatePost'
import "./NavBar.css"
import {HomeOutline, MessengerOutline, AddOutline, CompassOutline, LoveOutline} from '../../images/svg'
import axios from 'axios'

function NavBar() {
    const [createPost, setCreatePost] = useState(false)
    const [image, setImage] = useState("")
    const [dropdown, setDropdown] = useState(false)

    let userImage = JSON.parse(localStorage.getItem("INSTAGRAM-CURRENT-USER"))["defaultPicture"]
    axios.get(userImage, {
        responseType: "arraybuffer",
        withCredentials: false
        })
        .then((res) => {
        const base64 = btoa(
            new Uint8Array(res.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ''
            )
        )
        setImage(base64)
    })
    

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
                <img 
                    id="current-user-profile"
                    style={{width: "30px", height: "30px", borderRadius: "50%", border: "none", cursor: "pointer"}} 
                    src={`data:image/jpeg;charset=utf-8;base64,${image}`}
                    onClick={()=>setDropdown(!dropdown)}
                />
                {dropdown && <div id="user-profile-dropdown">
                    <div className='dropdown-profile-elements'>Profile</div>
                    <div className='dropdown-profile-elements'>Saved</div>
                    <div className='dropdown-profile-elements'>Settings</div>
                    <div className='dropdown-profile-elements'>Report a problem</div>
                    <div className='dropdown-profile-elements'>Switch accounts</div>
                    <div className='dropdown-profile-elements'
                        onClick={()=>{
                            localStorage.removeItem("INSTAGRAM-CURRENT-USER")
                            window.open("/", "_self")
                        }}>Logout
                    </div>
                </div>}
            </div>
            <CreatePost trigger={createPost} setTrigger={setCreatePost}/>
        </div>
    </nav>
    )
}

export default NavBar