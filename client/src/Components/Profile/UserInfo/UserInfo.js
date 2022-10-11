import {React, useEffect, useState} from 'react'
import "./UserInfo.css"
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

function UserInfo({user, totalPost=0}) {

  useEffect(() => {
    const getDP = async () => {
      axios.get(user["defaultPicture"], {responseType: "arraybuffer", withCredentials: false})
      .then((res) => {
        const base64 = btoa(
            new Uint8Array(res.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),  ''
            )
          )
        setImage(base64)
      })
    }
    getDP()
  }, [])

  // let self = user["userName"] == JSON.parse(localStorage.getItem("INSTAGRAM-CURRENT-USER"))["userName"]
  let self = false
  const [image, setImage] = useState("")
  console.log(user)


  return (
    <div id="UserInfoPage">
      <div id="UserInfoPage-cont">
        <div id="profile-page-cont">
          <img id="profile-page-image" src={`data:image/jpeg;charset=utf-8;base64,${image}`}/>
        </div>
        <div id="profile-page-details">
          <div id="userinfo-page-1">
            <p style={{fontSize: "x-large"}}>{user["userName"]}</p>
            {!self && <div id='profile-page-details-cont'>
              <div id='profile-page-details-message'></div>
              <div id='profile-page-details-unfollow'></div>
              <div id='profile-page-details-suggestion'></div>
            </div>}
            {!self && <div id="profile-page-details-three-dot"></div>}
          </div>
          <div id="userinfo-page-2">
            <div className='userinfo-page-2' id="userinfo-stats-posts">{totalPost} posts</div>
            <div className='userinfo-page-2' id="userinfo-stats-followers">{user["followers"].length} followers</div>
            <div className='userinfo-page-2' id="userinfo-stats-following">{user["following"].length} following</div>
          </div>
          <div id="userinfo-page-3">
            {user["name"]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
