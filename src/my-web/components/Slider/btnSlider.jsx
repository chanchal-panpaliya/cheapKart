//css
import './Slider.css'
//img
import rightArrow from '../../img/slider/right-arrow.svg';
import leftArrow from '../../img/slider/left-arrow.svg';

const btnSlider =({moveslider,direction}) =>{

    return(
      <button
      onClick={moveslider}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
    )
}

export default btnSlider;