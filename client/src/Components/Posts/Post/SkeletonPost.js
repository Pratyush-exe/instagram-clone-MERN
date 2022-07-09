import React from 'react'
import { LoveOutline, LoveFilled, Comment, Share, SaveFilled, SaveOutline, ThreeDots } from '../../../images/svg'
import './SkeletonPost.css'

function SkeletonPost() {
  return (
    <div className='post-main-component-skeleton' >
        <div className='post-header-skeleton'>
        <div className='post-user-details-skeleton'>
            <div className='post-user-image-skeleton'></div>
            <div className='post-user-loc-name-skeleton'>
            <p className='post-user-skeleton'></p>
            <p className='post-user-skeleton'></p>
            </div>
        </div>
        <ThreeDots />
        </div>
        <div className='post-user-img-skeleton'></div>
        <div className='post-actions-skeleton'>
        <div className='post-not-save-skeleton'>
            <div style={{fontSize: "25px", margin: "0px 10px"}}><LoveOutline /></div>
            <div className='post-action-bts-skeleton' ><Comment /></div>
            <div className='post-action-bts-skeleton' ><Share /></div>
        </div>
        <div className='post-action-bts-skeleton' ><SaveOutline /></div>
        </div>
        <p className='post-likes-skeleton'> </p>
        <p className='post-caption-skeleton'></p>
    </div>
  )
}

export default SkeletonPost