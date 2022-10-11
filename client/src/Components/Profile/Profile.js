import {React, useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import UserInfo from "./UserInfo/UserInfo"
import UserPosts from "./UserPosts/UserPosts"
import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

const getUser = async (setUser) => {
  await API.post('/user/getUser', {userName: "check"})
    .then((response)=>{
      console.log("response", response)
      setUser(response.data["result"])
    })
}

function Profile() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    getUser(setUser)
  }, [])

  console.log("user", user)

  return (
    <div id="profile-page">
      <NavBar />
      <UserInfo user={user}/>
      <UserPosts user={user}/>
    </div>
  )
}

export default Profile
