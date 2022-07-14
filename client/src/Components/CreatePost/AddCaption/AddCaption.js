import React, {useState} from 'react'
import './AddCaption.css'
import { Location, UpArrow } from '../../../images/svg'

function AddCaption({postData, setPostData}) {

    const [accessibility, setAccessibility] = useState(false)
    const [advanced, setAdvanced] = useState(false)

  return (
    <div className='caption-cont'>
        <div className='caption-image-cont'>
            <img src={postData["selectedFile"][0]} style={{objectFit: 'scale-down', height: '100%', width: '100%'}}/>
        </div>
        <div className='caption-control-cont'>
            <div className='caption-user-cont'>
                <div className='post-user-image'></div>
                {/* <div>{postData["creator"]}</div> */}
                <div style={{marginLeft: '20px'}}>patnaik</div>
            </div>
            <div className='caption-caption-cont'>
                <textarea placeholder='Write a caption...' className='caption-text-area'
                    onChange={(e) => setPostData({...postData, caption: e.target.value})}
                ></textarea>
                <div className='icons-words-caption'>
                    
                </div>
            </div>
            <hr />
            <div className='caption-location-cont caption-sizing'>
                <input type={"text"} className='caption-location-input' placeholder='Add location' onChange={ (e)=>{
                    setPostData({...postData, location:e.target.value})
                }}/>
                <div className='location-icon'><Location /></div>
            </div>
            <hr />
            <div className='caption-accessibility-cont'>
                {/* not functional */}
                <div className='caption-accessibility-head caption-sizing' onClick={()=>setAccessibility(!accessibility)}>
                    <h3 style={{width: "300px", fontSize: "15px", margin: "10px"}}>Accessibility</h3>
                    <div className={`location-icon ${accessibility ? "upside" : "downside"}`}> <UpArrow /> </div>
                </div>
                {accessibility && <div className='caption-accessibility-body'>
                </div>}
            </div>
            <hr />
            <div className='caption-advanced-cont'>
                {/* not functional */}
                <div className='caption-advanced-head caption-sizing' onClick = {()=>setAdvanced(!advanced)}>
                    <h3 style={{width: "300px", fontSize: "15px", margin: "10px"}}>Advanced settings</h3>
                    <div 
                        className={`location-icon ${advanced ? "upside" : "downside"}`}
                    > <UpArrow />
                    </div>
                </div>
                {advanced && <div className='caption-advanced-body'>

                </div>}
            </div>
            <hr />
        </div>
    </div>
  )
}

export default AddCaption