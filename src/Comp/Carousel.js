import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from 'axios';
//import {ArrowBackIos,ArrowForwardIos} from '@material-ui/icons'

// const PreviousBtn =(props)=>{
//   console.log(props)
//   return(
//     <div>
//       <ArrowBackIos/>
//     </div>
//   )
// }
// const NextBtn =(props)=>{
//   return(
//     <div>
//       <ArrowForwardIos/>
//     </div>
//   )
// }
const Carousel = ()=>{

  const [images, setImages] =useState([]);

   useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
        .then((response)=> 
          
          setImages(response.data.data.memes))
        .catch(err=>{console.log(err)});
    }, [])
   
    return (
      <div className="container mx-auto">
        <Slider autoplay  autoplaySpeed={500} slidesToShow={1} slidesToScroll={1}
         infinite>
           {images.map((pic)=>(
           <img key={pic.id} src={pic.url} alt="pic1" className="w-full h-96"/>
             ))}
        </Slider>
      </div>
    );
  }

export default Carousel;