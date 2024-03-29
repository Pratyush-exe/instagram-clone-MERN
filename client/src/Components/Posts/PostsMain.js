import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post/Post'
import "./PostMain.css"
import SkeletonPost from './Post/SkeletonPost'
import NavBar from '../NavBar/NavBar'

const API = axios.create({ baseURL: 'http://localhost:5000' })

function PostsMain() {

    const [Data, setData] = useState(false)
  
    useEffect(() => {
      const getPost = async () => {
        const user = await API.get('/posts')
        setData(user.data.reverse())
      } 
      getPost()
    }, [])

    return (
        <>
            <NavBar />
            <div className='main-posts-container'>
                <div className='posts-container'>
                    {Data && Data.map((data, i)=>(
                        <Post key={i} PostData={data} />
                    ))}
                    {!Data && (
                        <><SkeletonPost />
                        <SkeletonPost /></>
                    )}
                </div>
                <div style={{width: "350px", height: "100px", backgroundColor: "gray", borderRadius: "10px", marginTop: "10px"}}>
                    Suggestions
                </div>
            </div>
        </>
    )
}

export default PostsMain