import React, {useState} from 'react'
import './EditImage.css'

function EditImage() {

  const [isFilter, setisFilter] = useState(true)
  const [brightness, setbrightness] = useState(0)
  const [contrast, setcontrast] = useState(0)
  const [saturation, setsaturation] = useState(0)
  const [temperature, settemperature] = useState(0)
  const [vignette, setvignette] = useState(0)

  return (
    <div className='edit-cont'>
        <div className='edit-image-cont'>
          <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg" />
        </div>
        <div className='edit-filter-cont'>
          <div className='edit-heading-cont'>
            <p className='bt-edit-image' style={{
              color: isFilter ? 'black' : 'gray',
              borderBottom: isFilter ? '1px solid black' : '1px solid lightgray'
            }} onClick={(e)=>{setisFilter(true)}}>Filters</p>
            <p className='bt-edit-image' style={{
              color: !isFilter ? 'black' : 'gray',
              borderBottom: !isFilter ? '1px solid black' : '1px solid lightgray'
            }} onClick={(e)=>{setisFilter(false)}}>Adjustments</p>
          </div>
          <div className='edit-controls-cont'>
            {isFilter && (
              <div className='filter-cont'>

              </div>
            )}
            {!isFilter && (
              <div className='adjust-cont'>
                <div className='slider-cont'>
                  <div className='slider-val-1'>
                    <p className='slider-head'>Brightness</p>
                    <h3 className='reset-bt' onClick={()=>setbrightness(0)}>Reset</h3>
                  </div>
                  <div className='slider-val-2'>
                    <input type="range" min="-100" max="100" className='slider' id="brightness" value={brightness} onChange={(e)=>{setbrightness(e.target.value)}} ></input>
                    <p className='slider-val-count'>{brightness}</p>
                  </div>
                </div>
                <div className='slider-cont'>
                  <div className='slider-val-1'>
                    <p className='slider-head'>Contrast</p>
                    <h3 className='reset-bt' onClick={()=>setcontrast(0)}>Reset</h3>
                  </div>
                  <div className='slider-val-2'>
                    <input type="range" min="-100" max="100" className='slider' id="contrast" value={contrast} onChange={(e)=>{setcontrast(e.target.value)}} ></input>
                    <p className='slider-val-count'>{contrast}</p>
                  </div>
                </div>
                <div className='slider-cont'>
                  <div className='slider-val-1'>
                    <p className='slider-head'>Saturation</p>
                    <h3 className='reset-bt' onClick={()=>setsaturation(0)}>Reset</h3>
                  </div>
                  <div className='slider-val-2'>
                    <input type="range" min="-100" max="100" className='slider' id="saturation" value={saturation} onChange={(e)=>{setsaturation(e.target.value)}} ></input>
                    <p className='slider-val-count'>{saturation}</p>
                  </div>
                </div>
                <div className='slider-cont'>
                  <div className='slider-val-1'>
                    <p className='slider-head'>Temperature</p>
                    <h3 className='reset-bt' onClick={()=>settemperature(0)}>Reset</h3>
                  </div>
                  <div className='slider-val-2'>
                    <input type="range" min="-100" max="100" className='slider' id="temperature" value={temperature} onChange={(e)=>{settemperature(e.target.value)}} ></input>
                    <p className='slider-val-count'>{temperature}</p>
                  </div>
                </div>
                <div className='slider-cont'>
                  <div className='slider-val-1'>
                    <p className='slider-head'>Vignette</p>
                    <h3 className='reset-bt' onClick={()=>setvignette(0)}>Reset</h3>
                  </div>
                  <div className='slider-val-2'>
                    <input type="range" min="0" max="100" className='slider' id="vignette" value={vignette} onChange={(e)=>{setvignette(e.target.value)}} ></input>
                    <p className='slider-val-count'>{vignette}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default EditImage