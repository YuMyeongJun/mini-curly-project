import React from "react";
import img1 from './images/slideImg1.jpg';

function ImageContainer (props:any) {

    return (
        <>
        <img src={`${process.env.PUBLIC_URL}/${props.imageSrc}`} alt="s" />
        </>
    );
}

export default ImageContainer;