//component
import Menu from '../../components/Menu/Menu';
import Slider from '../../components/Slider/Slider';
import SliderCard from '../../components/SliderCard/SliderCard';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
//constant
import {home_brand_img} from '../../constant/home_img_constant';
//css
import './Home.css';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
//context
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
//api
 import {fetchAllCartData,fetchAllTopOfferData,fetchAllMobileData,fetchAllApplicationData} from '../../useEffect/useEffectCart';

const Home =()=>{

   let [data,setdata] = useState([])
   let [topoffer,settopoffer] = useState([])
   let [mobiledata,setmobiledata]=useState([])
   let [applicationData,setapplicationData]=useState([])
   const {menuselected} = useContext(CartContext);
  


   useEffect(()=>{
      window.scrollTo({ behavior: 'smooth', top: '0px' });
      fetchAllCartData().then(function(result){
         setdata(result)       
      });

      //Top Offer 
      fetchAllTopOfferData().then(function(result){
         settopoffer(result)
      })

      //Mobiles 
      fetchAllMobileData().then(function(result){
         setmobiledata(result)
      })

      //Application
      fetchAllApplicationData().then(function(result){
         setapplicationData(result)
      })

   },[])

   
   
    return(
        <div>
            <Header/>
            <Menu/>
            <Slider/>
            {/* / card-slider with timer and Ad/ */}
            <div className='container-box'>
               {/* / card-slider/ */}
               <div className='slider-box'>
                  <div className='slider-box-flex-col'>
                     <div className='slider-box-flex-row'>
                        <div> Deals of the Day - <CountDownTimer/> </div>
                        <div> 
                           <Link to={'/product'} onClick={(e)=>menuselected(topoffer.length>0?topoffer[0].categoryName:"")}> view more </Link> 
                        </div>
                     </div>
                     <div className='row-1'>                   
                           <SliderCard cardlist = {topoffer.length>0?topoffer:[]}/> 
                     </div>
                  </div>
               </div>
               <div className='product-Ad-container'>
                  {
                     home_brand_img.map((img,index)=>{
                        return <img key={index} className='Ad_image' src={img} alt="brand_img"/>
                     })
                  }              
               </div>
            </div>
            {/*card-slider*/ }
            <div className='slider-box'>
                  <div className='slider-box-flex-col'>
                     <div className='slider-box-flex-row'>
                        <b>  Mobiles </b>
                        <b> 
                           <Link to={'/product'} onClick={(e)=>menuselected(mobiledata.length>0?mobiledata[0].categoryName:"")}> view more </Link> 
                        </b>
                     </div>
                     <div className='row-2'>
                        <SliderCard cardlist = {mobiledata.length>0?mobiledata:[]}/>
                     </div>
                  </div>
               </div>
               {/*slider*/ }
               <div className='slider-box'>
                     <div className='slider-box-flex-col'>
                        <div className='slider-box-flex-row'>
                           <b> Application </b>
                           <b> 
                              <Link to={'/product'} onClick={(e)=>menuselected(applicationData.length>0?applicationData[0].categoryName:"")}> view more </Link>  
                           </b>
                        </div>
                        <div className='row-2'>
                           <SliderCard cardlist = {applicationData}/>
                        </div>
                     </div>
                  </div>
             <Footer/>
        </div>
    )
}

export default Home ;