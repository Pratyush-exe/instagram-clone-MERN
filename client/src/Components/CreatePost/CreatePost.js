import React, {useState} from 'react'
import FileBase from 'react-file-base64'
import "./CreatePost.css"
import axios from 'axios'
import {MdOutlineClose} from 'react-icons/md'
import AddImage from './AddImage/AddImage'
import CropImage from './CropImage/CropImage'

const API = axios.create({ baseURL: 'http://localhost:5000' })

function CreatePost({trigger, setTrigger}) {
    const [page, setPage] = useState(1)
    const [postData, setPostData] = useState({
        creator: "", location: "", selectedFile: [], caption: "",
        tags: [], createAt: "", comments: [], likes: []
    })
    const titles = ["Create new post", "Crop", "Edit", "Create new post"]

    async function handleSubmit(e) {
        await API.post('/posts' , postData)
        setTrigger(false)
    }

    return ( trigger ? (
    <div className='creat-post-bg'>
        <MdOutlineClose className='cross-bt' onClick={()=>setTrigger(false)} />
        <div className='creat-post'>
            <div className='create-post-head'>{titles[page]}</div>
            <hr/>
            <div className='create-post-action-container'>
                {page===0 && <AddImage page={page} setPage={setPage} setPostData={setPostData} postData={postData}/>}
                {page===1 && <CropImage page={page} setPage={setPage} setPostData={setPostData} postData={postData}/>}
                {page===2 && <AddImage page={page} setPage={setPage} setPostData={setPostData} postData={postData}/>}
                {page===3 && <AddImage page={page} setPage={setPage} setPostData={setPostData} postData={postData}/>}
            </div>
        </div>
    </div>
  ) : "" )
}

export default CreatePost