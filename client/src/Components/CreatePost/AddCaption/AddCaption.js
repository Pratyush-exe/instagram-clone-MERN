import React from 'react'
import './AddCaption.css'
import { Location } from '../../../images/svg'

function AddCaption({postData, setpostData}) {
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
                <textarea placeholder='Write a caption...' className='caption-text-area'></textarea>
                <div className='icons-words-caption'>
                    
                </div>
            </div>
            <div className='caption-location-cont caption-sizing'>
                <input type={"text"} className='caption-location-input' placeholder='Add location'/>
                <div className='location-icon'><Location /></div>
            </div>
            <div className='caption-accessibility-cont caption-sizing'>
                {/* not functional */}
                <div className='caption-accessibility-head'>
                </div>
                <div className='caption-accessibility-body'>

                </div>
            </div>
            <div className='caption-advanced-cont caption-sizing'>
                {/* not functional */}
                <div className='caption-advanced-head'>

                </div>
                <div className='caption-advanced-body'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCaption