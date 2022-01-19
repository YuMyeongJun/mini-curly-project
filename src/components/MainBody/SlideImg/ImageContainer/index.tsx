import React from "react";

function ImageContainer(props: any) {

    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/${props.imageSrc}`} alt="" />
        </>
    );
}

export default ImageContainer;