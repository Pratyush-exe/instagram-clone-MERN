import React, {useState, useEffect} from 'react'
import './Post.css'
import axios from 'axios'
import {BsThreeDots, BsHeart, BsHeartFill} from 'react-icons/bs'
import {TbMessageCircle2} from 'react-icons/tb'
import {IoPaperPlaneOutline} from 'react-icons/io5'

const API = axios.create({ baseURL: 'http://localhost:5000' })

function Post({}) {

  const [PostData, setPostData] = useState({})
  const [IsClick, setIsClick] = useState(false)
  
  useEffect(() => {
    const getPost = async () => {
      const user = await API.get('/posts')
      setPostData(user.data[0])
      console.log(user)
    }

    getPost()
  }, [])
  

  return (
    <div className='post-main-component' >
      <div className='post-header'>
        <div className='post-user-details'>
          <div className='post-user-image'></div>
          <div className='post-user-loc-name'>
            <p className='post-user'>{PostData["creator"]}</p>
            <p className='post-user'>{PostData["location"]}</p>
          </div>
        </div>
        <BsThreeDots />
      </div>
      <img className='post-user-img' src={PostData["selectedFile"][0]} ></img>
      <div className='post-actions'>
        <div className='post-not-save'>
          {IsClick && <BsHeart onClick={()=>setIsClick(!IsClick)} style={{fontSize: "25px", margin: "0px 10px"}}/>}
          {!IsClick && <BsHeartFill className='animate-heart' onClick={()=>{setIsClick(!IsClick)}} style={{fontSize: "25px", margin: "0px 10px"}}/>}
          <TbMessageCircle2 style={{transform: "rotateY(180deg)"}} className='post-action-bts' />
          <IoPaperPlaneOutline className='post-action-bts' />
        </div>
        <div className='post-action-bts'>
          <svg color="black" fill="black" role="img" viewBox="0 0 30 30"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
      </div>
      <p className='post-likes'>{PostData["likes"].length} likes </p>
      <p className='post-caption'><strong>{PostData["creator"]} </strong>{PostData["caption"]}</p>
    </div>
  )
}

export default Post