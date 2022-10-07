import React, {useState} from 'react'
import "./CreatePost.css"
import axios from 'axios'
import {MdOutlineClose} from 'react-icons/md'
import AddImage from './AddImage/AddImage'
import CropImage from './CropImage/CropImage'
import EditImage from './EditImage/EditImage'
import { BackArrow } from '../../images/svg'
import AddCaption from './AddCaption/AddCaption'

const API = axios.create({ baseURL: 'http://localhost:5000' })

function CreatePost({trigger, setTrigger}) {
    const [page, setPage] = useState(0)
    const [postData, setPostData] = useState({
        creator: JSON.parse(localStorage.getItem("INSTAGRAM-CURRENT-USER"))["userName"], 
        location: "",
        selectedFile: [], 
        caption: "",
        tags: [], 
        createAt: "", 
        comments: [], 
        likes: []
    })
    const titles = ["Create new post", "Crop", "Edit", "Create new post", "Sharing", 'Post shared']

    async function handleSubmit(e) {
        setPage(4)
        await API.post('/posts' , postData)
        console.log(postData)
        setPage(5)
    }

    return ( trigger ? (
    <div className='create-post-bg'>
        <MdOutlineClose className='cross-bt' onClick={()=>{
            setTrigger(false)
            setPage(0)
            }} />
        <div className='create-post'>
            <div className='create-post-head-cont'>
                {(page!==0 && page!==4 && page!==5) && <div style={{cursor: 'pointer'}} onClick={()=>setPage(page-1)} ><BackArrow/></div>}
                <div className='create-post-head'>{titles[page]}</div>
                {(page!==0 && page!==3 && page!==4 && page!==5) && <div className='create-post-next' style={{cursor: 'pointer'}} onClick={()=>setPage(page+1)}>Next</div>}
                {(page===3) && <div className='create-post-next' style={{cursor: 'pointer'}} onClick={handleSubmit}>Share</div>}
            </div>
            <hr/>
            <div className='create-post-action-container'>
                {page===0 && <AddImage   page={page} setPage={setPage} setPostData={setPostData} postData={postData}/>}
                {page===1 && <CropImage  page={page} setPage={setPage} setPostData={setPostData} postData={postData}/>}
                {page===2 && <EditImage  page={page} setPage={setPage} setPostData={setPostData} postData={postData}/>}
                {page===3 && <AddCaption page={page} setPage={setPage} setPostData={setPostData} postData={postData}/>}
                {page===4 && <div className='post-loading' >
                        <img src='https://static.cdninstagram.com/rsrc.php/v3/yA/r/34QF6MIeoYt.gif'></img>
                    </div>}
                {page===5 && <div className='posted' >
                        <img src='https://static.cdninstagram.com/rsrc.php/v3/yQ/r/alF2W5MavPX.gif'></img>
                        <p>Your post has been shared.</p>
                    </div>}
            </div>            
        </div>
    </div>
  ) : "" )
}

export default CreatePost