import React, {useState, useEffect} from 'react'
import './Post.css'
import axios from 'axios'
import { LoveOutline, LoveFilled, Comment, Share, SaveFilled, SaveOutline, ThreeDots } from '../../../images/svg'

const API = axios.create({ baseURL: 'http://localhost:5000' })


function Post({PostData}) {

  const [IsClick, setIsClick] = useState(false)
  const [image, setImage] = useState("")

  useEffect(() => {
    const getDP = async () => {
      await API.post('/user/getUser', {userName: PostData["creator"]})
      .then(response => {
        console.log("this is user1", response.data["result"])
        let user = response.data["result"]
        axios.get(user["defaultPicture"], {responseType: "arraybuffer"}).then((res) => {
          const base64 = btoa(
              new Uint8Array(res.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ''
              )
          )
          setImage(base64)
        })
      })
    }
    getDP()
  }, [])

  return (
    <div className='post-main-component' >
      <div className='post-header'>
        <div className='post-user-details'>
          <img className='post-user-image' src={`data:image/jpeg;charset=utf-8;base64,${image}`} />
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