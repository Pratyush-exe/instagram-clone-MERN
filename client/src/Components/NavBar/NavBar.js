import React, {useState} from 'react'
import CreatePost from '../CreatePost/CreatePost'
import "./NavBar.css"
import {CgAddR} from 'react-icons/cg'
import {AiOutlineHome, AiOutlineHeart} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {MdOutlineExplore} from 'react-icons/md'

function NavBar() {
    const [createPost, setCreatePost] = useState(false)

    return (
    <nav className='navbar'>
        <div className='navbar-inner'>
            <h3>Instagram Clone</h3>
            <div className='navbar-options'>
                <AiOutlineHome className='nav-icons' />
                <RiMessengerLine className='nav-icons' />
                <CgAddR className='nav-icons' onClick={() => setCreatePost(true)} />
                <MdOutlineExplore className='nav-icons' />
                <AiOutlineHeart className='nav-icons' />
            </div>
            <CreatePost trigger={createPost} setTrigger={setCreatePost}/>
        </div>
    </nav>
    )
}

export default NavBar