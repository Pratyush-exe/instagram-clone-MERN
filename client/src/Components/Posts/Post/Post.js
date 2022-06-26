import React, {useState, useEffect} from 'react'
import './Post.css'
import { LoveOutline, LoveFilled, Comment, Share, SaveFilled, SaveOutline, ThreeDots } from '../../../images/svg'

function Post({PostData}) {

  const [IsClick, setIsClick] = useState(false)

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
        <ThreeDots />
      </div>
      <img className='post-user-img' src={PostData["selectedFile"][0]} ></img>
      <div className='post-actions'>
        <div className='post-not-save'>
          {!IsClick && <div onClick={()=>setIsClick(!IsClick)} style={{fontSize: "25px", margin: "0px 10px"}}><LoveOutline /></div>}
          {IsClick && <div className='animate-heart' onClick={()=>{setIsClick(!IsClick)}} style={{fontSize: "25px", margin: "0px 10px"}}><LoveFilled /></div>}
          <div className='post-action-bts' ><Comment /></div>
          <div className='post-action-bts' ><Share /></div>
        </div>
        <div className='post-action-bts' ><SaveOutline /></div>
      </div>
      <p className='post-likes'>{PostData["likes"].length} likes </p>
      <p className='post-caption'><strong>{PostData["creator"]} </strong>{PostData["caption"]}</p>
    </div>
  )
}

export default Post