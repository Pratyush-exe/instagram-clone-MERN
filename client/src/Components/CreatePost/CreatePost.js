import React, {useState} from 'react'
import FileBase from 'react-file-base64'
import "./CreatePost.css"
import axios from 'axios'
import {MdOutlineClose} from 'react-icons/md'

const API = axios.create({ baseURL: 'http://localhost:5000' })

function CreatePost({trigger, setTrigger}) {
    const [postData, setPostData] = useState({
        creator: "", location: "", selectedFile: [], caption: "",
        tags: [], createAt: "", comments: [], likes: []
    })

    async function handleSubmit(e) {
        setTrigger(false)
        await API.post('/posts' , postData)
    }

    return ( trigger ? (
    <div className='creat-post-bg'>
        <MdOutlineClose className='cross-bt' onClick={()=>setTrigger(false)} />
        <div className='creat-post'>
            <div className='create-post-head'>Create Post</div>
            <hr/>
            <div className='create-post-body'>
                <form id="form-create-post">
                    <input className='input' type={"text"} placeholder="creator" id="creator" 
                        onChange={(e)=>setPostData({ ...postData, creator: e.target.value })} />
                    <input className='input' type={"text"} placeholder="location" id="location" 
                        onChange={(e)=>setPostData({ ...postData, location: e.target.value })} />
                    <input className='input' type={"text"} placeholder="caption" id="caption" 
                        onChange={(e)=>setPostData({ ...postData, caption: e.target.value })} />
                    <div className="input" >
                        <FileBase type="file" multiple={false}
                            onDone={({base64}) => setPostData({...postData, selectedFile: [base64]})} />
                    </div>
                    <button className='input' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  ) : "" )
}

export default CreatePost