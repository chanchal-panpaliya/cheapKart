//react
import { useEffect , useState ,useContext} from 'react';
import { Link } from "react-router-dom";
//css
import "../ProductDetails.css";
import "../../Home/Home.css";
//component
import Rating from "../../../components/Rating/Rating";
import SliderCard from "../../../components/SliderCard/SliderCard";
//context
import CartContext from '../../../context/cart/CartContext';
//api
import { fetchAllBeautyToysMoreData } from "../../../useEffect/useEffectCart";


const BeautyToysMoreData_ProductDetails=(props)=>{
    const { addToCart,addToWishList,menuselected,getSingleSelectedData ,getsingledata} = useContext(CartContext);
    let [slider_data_list,setslider_data_list]=useState([]);

    useEffect(()=>{
        fetchAllBeautyToysMoreData().then(function(result){
            setslider_data_list(result)
            }) 
    },[setslider_data_list])
   
return(
    <div>
    <div className='row'>
        <div className='pd-image-container'> 
            {/* image */}
            <div className='flex-row pd-flex-colume-gap-4rem'> 
                <div className='pd-image-small'>
                    {
                        props.data.SmallImages!="" ? props.data.SmallImages.map((item,index)=>{
                        return <img className='smallimage-top-offer' src={item} key={index}/> 
                        })
                        : ""
                    }
                </div>
                <div>
                    <img src={props.data.Image} className="image-top-offer"/>
                </div>
            </div>
            {/* button */}
            <div className='pd-buttons'>
                <button className='button bg-cr-addtocart' onClick={()=>addToCart(props)}> Add to cart </button>
                <button className='button bg-cr-addtowishlist'  onClick={()=>addToWishList(props)}> Add to wishlist </button>
            </div>
        </div>
        <div className='pd-details-container'>
            <div className='pd-details'>
                <h4 className='pd-costprice'> {props.data.Brand}</h4>
                <h3>{props.data.title}</h3>
                <small> 
                    <span className='pd-rating'>  
                    <label> {props.data.Rating} </label>
                    <label> <i class="fa fa-star pd-rating-star"></i> </label>
                    </span>  
                    {props.data.Reviews} reviews
                </small>
                <div className='pd-extraoff'>
                    Extra {props.data.extraOff} off  
                </div>
                <div>
                    <label className='pd-saleingprice'>₹{props.data.saleingprice} </label> 
                    <strike className='pd-costprice'> ₹{props.data.costprice} </strike> 
                    <label className='pd-percentOff'> {props.data.percentOff} OFF </label>
                </div>
                <div>
                    Coupon Offer : {props.data.Coupon} 
                </div>
                <div>
                    Status : {props.data.Status}
                </div>
                {
                    props.data.Author!=""?
                    <div>Author : {props.data.Author}  </div> : null
                }
                <div>
                    Type : {props.data.type}
                </div>
                {/* <div>
                    Size : {props.data.Size}
                </div> */}
                { props.data.Availableoffers!="" ?
                <div className='pd-availableoffers'>
                    <h4> Available offers </h4>
                    <ul className='pd-availableoffers-list'> 
                        {
                            props.data.Availableoffers.map((offerlist,index)=>{
                                return <li> 
                                    <i class="fa fa-tag pd-extraoff"></i>
                                    <label>   {offerlist} </label>
                                    
                                    </li>
                            })
                        } 
                    </ul>
                </div>
                : ""
                  }
                {/* {props.data.SizeList!=""?
                <div className='pd-padding-top-bottom'>
                    Size :
                        { props.data.SizeList.map((sizeitem,sizeindex)=>{
                            return <button className='pd-size'> {sizeitem} </button>
                        })}
                </div> : ""} */}
                <div className='pd-padding-top-bottom'>
                    Delivery : {props.data.DeliverBy} (Delivery Charges - {props.data.Change})
                </div>
                <div className='pd-padding-top-bottom'>
                    Replacement : {props.data.Replacement}
                </div>
                <div className='pd-padding-top-bottom'>
                    Services : {props.data.Services}
                </div>
                <div className='pd-padding-top-bottom'>
                    <h2> Product Details </h2>
                    <div className='flex-col pd-padding-top-bottom'>
                        {
                           <div className="table"> 
                           {
                           props.data.ProductDetails.map((subitem,subindex)=>{
                               return(
                                   <> 
                                    <div className="row-table">
                                        <div className="column-table">
                                            {subitem.type}
                                        </div>
                                        <div className="column-table">
                                            {subitem.value}
                                        </div>
                                    </div>
                                   </>
                               )
                           })
                           }
                   </div>
                        }
                    </div>
                </div>
            
            </div>
        </div>
        <div className='pd-image-container'>
            <i class="fa-solid fa-share"></i>
        </div>
    </div>
    <div className='pd-reviewandrating'>
        <h3> Rating and Review </h3>
        {
         props.data.RatingReviewData.length>0 ? <div> {props.data.RatingReviewData.map((reviewitem,reviewindex)=>{
              return(
                  <ul className='pd-padding-top-bottom' key={reviewindex}>
                      <li> <b>  {reviewitem.title} </b> </li>
                      <li> {reviewitem.desc} </li>
                      <li> <Rating value={Number(reviewitem.rating)} reviewText={""} /> </li>
                      <li> { reviewitem.images!=="" ? reviewitem.images.map((img,index)=>{
                             return <img src={img} className="pd-review-images"/>
                            })
                            : ""
                        } 
                      </li>
                  </ul>
              )
          })
        }
         more...
          </div>
          : "you are first one , write review"  
        }   
    </div>
    <div className='pd-reviewandrating'>
       <h3>  Related Product </h3>
       <div className='slider-box'>
            <div className='slider-box-flex-col'>
                <div className='slider-box-flex-row'>
                <div>  </div>
                <div> 
                     <Link to={'/product'} onClick={(e)=>menuselected(slider_data_list.length>0?slider_data_list[0].categoryName:"")}> view more </Link>  
                </div>
                </div>
                <div className='row-2'>
                <SliderCard cardlist = {slider_data_list.length>0?slider_data_list:[]}/>
                </div>
            </div>
        </div>
    </div>
</div>
 )
}

export default BeautyToysMoreData_ProductDetails;