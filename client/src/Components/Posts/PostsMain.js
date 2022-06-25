import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Post from './Post/Post'
import "./PostMain.css"

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
    <div className='posts-container'>
        {Data && Data.map((data)=>(
            <Post PostData={data} />
        ))}
    </div>
    )
}

export default PostsMain