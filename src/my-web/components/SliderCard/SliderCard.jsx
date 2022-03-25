//react
import { useEffect, useRef, useState } from 'react';
//component
import { CardProduct1 } from '../Card/Card';
import Loader from '../Loader/Loader';
//css
import './SliderCard.css';
//img
import rightArrow from '../../img/slider/right-arrow.svg';
import leftArrow from '../../img/slider/left-arrow.svg';

const SliderCard =(props) =>{
    let [scrollcard,setscrollcard]=useState(0);
    const containerRef = useRef();

    const handlescrollcardLeft =()=>{
      containerRef.current.scrollLeft -= 500;
    }

    const handlescrollcardRight =()=>{
      containerRef.current.scrollLeft += 500;
  }

    return(
        <div className="main-slider-container">
        <button className="slider-icon left" onClick={handlescrollcardLeft}><img className='img-scroll-arrow' src={leftArrow} alt="leftArrow"/> </button>
        <div className="slider" style={{scrollLeft:scrollcard}} ref={containerRef}>
           {
           props.cardlist.length>0? 
            props.cardlist.map((slide,index)=>{
                    return(
                      slide !== null ? <CardProduct1 data={slide} key={index} Loader={""}/> : <CardProduct1 data={[]} Loader={"Loader"} key={index}/>  
                    )
                })
            : <div> <Loader/> </div>
            }
        </div>
        <button className="slider-icon right" onClick={handlescrollcardRight}>  <img className='img-scroll-arrow' src={rightArrow} alt="rightarrow"/>  </button>
    </div>  
    )

}

export default SliderCard;