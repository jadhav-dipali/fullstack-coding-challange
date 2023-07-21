import React from "react"
import ImageSlider, { Slide } from "react-auto-image-slider"
import TopNav from './TopNav';

export default function Home (){
    return <>
    <TopNav/>
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img className="slides-of-home" alt="img2" src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2023-03/parcel-paper-cartons-with-shopping-cart-logo-trolley-laptop-keyboard-min.jpg" />
      </Slide>
      <Slide>
        <img className="slides-of-home" alt="img2" src="https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg?w=360" />
      </Slide>
      <Slide>
        <img className="slides-of-home" alt="img1" src="https://miro.medium.com/v2/resize:fit:1018/1*iAu65xDmvpVdBJgps6EDEw.png" />
      </Slide>
    </ImageSlider>
    </>
}