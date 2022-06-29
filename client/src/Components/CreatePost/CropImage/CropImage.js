import React, {useRef} from 'react'
import Cropper from "react-cropper";
import "./cropperjs.css";
import "./CropImage.css"
import img from "C:/Users/KIIT/Downloads/dsdsfgdfsgdf.png"

function CropImage({page, setPage, setPostData, postData}) {
    const cropperRef = useRef(null);
    const onCrop = () => {
      const imageElement = cropperRef?.current;
      const cropper = imageElement?.cropper;
      console.log(cropper.getCroppedCanvas().toDataURL());
    };
  
    return (
      <Cropper
        src={img}
        style={{ height: "100%", width: "100%", pointerEvents: "none"}}
        // initialAspectRatio={1}
        guides={false}
        crop={onCrop}
        ref={cropperRef}
      />
    );
}

export default CropImage