import React, {useState} from 'react'
import CreatePost from '../CreatePost/CreatePost'
import "./NavBar.css"
import {HomeOutline, MessengerOutline, AddOutline, CompassOutline, LoveOutline} from '../../images/svg'
import axios from 'axios'

function NavBar() {
    const [createPost, setCreatePost] = useState(false)
    const [image, setImage] = useState("")

    let userImage = JSON.parse(localStorage.getItem("INSTAGRAM-CURRENT-USER"))["defaultPicture"]
    axios.get(userImage, {
        responseType: "arraybuffer"
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
                <button onClick={()=>{
                    localStorage.removeItem("INSTAGRAM-CURRENT-USER")
                    window.open("/", "_self")
                }}>LOGOUT</button>
                <img style={{width: "30px", height: "30px", borderRadius: "50%", border: "none"}} 
                    src={`data:image/jpeg;charset=utf-8;base64,${image}`}
                />
            </div>
            <CreatePost trigger={createPost} setTrigger={setCreatePost}/>
        </div>
    </nav>
    )
}

export default NavBar