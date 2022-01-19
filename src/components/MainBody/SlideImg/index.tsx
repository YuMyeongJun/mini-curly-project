import React, { useEffect, useState } from "react";
import ImageContainer from "./ImageContainer";
import './style.css';

function SlideImg() {
    const slides = [
        {
            city: 'Paris',
            img: './images/slideImg5.jpg',
        },
        {
            city: 'Singapore',
            img: './images/slideImg4.jpg',
        },
        {
            city: 'Prague',
            img: './images/slideImg3.jpg',
        },
        {
            city: 'Amsterdam',
            img: './images/slideImg2.jpg',
        },
        {
            city: 'Moscow',
            img: './images/slideImg1.jpg',
        },
    ];


    return (
        <div className="slide__container">
            <div className="slide__left__slide">
                <button type="button" className="left__btn">123</button>
            </div>
            <div className="slide__images">
                {
                    slides.map(element => <ImageContainer imageSrc={element.img} />)
                }
            </div>
            <div className="slide__right__slide">
                <button type="button" className="right__btn">123</button>
            </div>
        </div>
    );
}

export default SlideImg;