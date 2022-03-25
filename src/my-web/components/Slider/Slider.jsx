//react
import { useEffect, useState } from 'react';
//css
import './Slider.css';
//component
import sliderdata  from './dataSlider';
import BtnSlider from './btnSlider';

let interval;

const Slider =() =>{

    const [sliderindex,setSliderindex] = useState(1);

    useEffect(() => {
        interval = setInterval(() => {
            nextslider();
          clearInterval(interval);
        }, 3000);
        return () => {
          clearInterval(interval);
        };
      }, [sliderindex])

    const nextslider =()=>{
       if(sliderindex!==sliderdata.length){
        setSliderindex(sliderindex+1)
       }else if(sliderindex===sliderdata.length){
        setSliderindex(1)
       }
    }

    const prevslider =()=>{
        if(sliderindex!==1){
            setSliderindex(sliderindex-1)
           }else if(sliderindex===1){
            setSliderindex(sliderdata.length)
           }
    }

    const moveDot = index => {
        setSliderindex(index)
    }

    return(
        <div className='container-slider'>
             {
                 sliderdata.map((item,index)=>{
                     return(
                         <div key={item.id} 
                         className={sliderindex === index + 1 ? "slide active-anim" : "slide"}
                         >
                             <img src={item.img} />
                         </div>
                     )
                })
             }
             <BtnSlider moveslider={nextslider} direction={"next"} />
             <BtnSlider moveslider={prevslider} direction={"prev"} />
             <div className="container-dots">
                {sliderdata.map((item, index) => (
                    <div 
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={sliderindex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider;
