//react
import { useContext ,useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
//css
import './Card.css';
//compoenet
import Rating from '../Rating/Rating';
import Loader from '../Loader/Loader';
//context
import CartContext from '../../context/cart/CartContext';



const CardProduct1=(props)=>{
     const {addToCart,addToWishList,getSingleSelectedData,wishlist,cartItems} = useContext(CartContext)

        let checkedcart = cartItems.length>0 ? cartItems.find((item)=>{ return item.data._id === props.data._id }) : false
        let checkedwishlist = wishlist.length>0 ? wishlist.find((item)=>{ return item.data._id === props.data._id }) : false
   
    return(
        <>
          {
              props.Loader === "Loader" ? 
              <div className="product-card-loader" key={props.data._id}>
                <Loader/> 
              </div>
             : 
             <div className="product-card flex-col" key={props.data._id}>
                 <Link to={"/productDetails/"+props.data._id} target="_blank" rel="noopener noreferrer" onClick={()=>getSingleSelectedData(props.data)} > 
                      <div className="discount-shape">
                          <div className="discount-shape-text">
                                {props.data.percentOff}%
                          </div>
                      </div>
                      <div className="product-card-image" style={{backgroundImage:`url(${props.data.Image})`}}></div>
                      <div className="flex-col row-gap-05rem">
                            <div className="product-card-title">{props.data.title}</div>
                            <div className="flex-row col-gap-2rem flex-justify-content-center">
                                ₹{props.data.saleingprice} 
                                <strike className="text-cross"> {props.data.costprice} </strike>  
                            </div>
                            <div>
                            <Rating cardtype="product_home" value={Number(props.data.Rating)} reviewText={props.data.Reviews} />
                            </div>
                      </div>
                    </Link>
                    <div className="flex-row col-gap-2rem flex-justify-content-end product-card-bottom">

                        <button class={checkedwishlist?"fa-solid fa-heart":"fa-solid fa-heart curser-pointer"} 
                                onClick={()=>{ addToWishList(props) }} 
                                disabled={checkedwishlist}>  
                        </button>

                        <button class={checkedcart?"fa-solid fa-basket-shopping ":"fa-solid fa-basket-shopping curser-pointer" } 
                                onClick={()=>addToCart(props)} 
                                disabled={checkedcart}>  
                        </button>
                    
                  </div>
             </div>
          }
        </>
    )
}



const Card_ProductList=(props)=>{
    const {addToCart,addToWishList,getSingleSelectedData,cartItems,wishlist} = useContext(CartContext)
 
     let checkedcart = cartItems.find((item)=>{ return item.data._id === props.data._id })
     let checkedwishlist = wishlist.find((item)=>{ return item.data._id === props.data._id })
   
    return(
        <> 
        {
            props.Loader === "Loader" ? 
            <div className="product-card-loader" key={props.data._id}>
              <Loader/> 
            </div>
           : 
           <div className="productlist_card-product-container">
                <div className="flex-row col-gap-2rem background-containt">
                        <img className="productlist_card-Card_ProductList-image" src={props.data.Image} alt={props.data.title}/>
                       <div className="productlist_card-card-containt">
                        <h3> {props.data.title} </h3> 
                        <h3> 
                            ₹{props.data.saleingprice} <strike className="text-cross"> {props.data.costprice} </strike> {props.data.percentOff}% OFF
                        </h3>
                        <Rating cardtype="product_list" value={Number(props.data.Rating)} reviewText={props.data.Reviews!=""?props.data.Reviews:"no review"} />
                        <div> 
                        {
                            props.data.categoryName === "Mobiles" || props.data.categoryName === "Electronics" || props.data.categoryName==="Appliances"?
                            props.data.Highlights.map((item)=>{return <li> {item} </li>}):null
                        }
                        {
                          props.data.categoryName === "Grocery" ?
                          props.data.Availableoffers.map((item)=>{return <li> {item} </li>}):null
                        }
                         {
                          props.data.categoryName === "Fashion" ?
                           <>
                             <ul>
                               <li> Fasion type : {props.data.FashionType} </li>
                               <li> Color: {props.data.Color}</li>
                               <li>Brand : {props.data.Brand}</li>
                               <li>Coupon:{props.data.Coupon}</li>
                             </ul>
                           </>
                          :null
                        }
                        {
                          props.data.categoryName === "Home" ?
                          <>
                            <ul>
                              <li> type : {props.data.type} </li>
                            </ul>
                          </>
                          : null
                        }
                        {
                          props.data.categoryName === "Beauty, Toys & More"?
                          <>
                             <ul>
                               <li> Type : {props.data.type} </li>
                               <li>Brand : {props.data.Brand}</li>
                               <li>Coupon:{props.data.Coupon}</li>
                             </ul>
                          </>:null
                        }
                   
                        </div>
                        <Link to={"/productDetails/"+props.data._id} target="_blank" rel="noopener noreferrer" onClick={()=>getSingleSelectedData(props.data)} > 
                          <b> view more ... </b> 
                        </Link>
                      </div>
                      <div>
                        <div className="productlist_card-card-button">
                          <button class={checkedcart?"button bg-cr-disable" :"button bg-cr-addtocart "} 
                                  onClick={()=>{addToCart(props)}} 
                                  disabled={checkedcart}> 
                                  {checkedcart ? "Product Added" :"Add To Cart"}  
                          </button>
                          <button class={checkedwishlist?"button bg-cr-disable":"button bg-cr-addtowishlist "} 
                                  onClick={()=>{ addToWishList(props) }} 
                                  disabled={checkedwishlist}> 
                                  {checkedwishlist?"Saved":"Add To Wishlist"} 
                          </button>
                         </div>
                      </div>
                </div>
           </div>
        }
        </>
    )
}


const CardTOPOFFER=(props)=>{
    const {addToCart,addToWishList,getSingleSelectedData,cartItems,wishlist} = useContext(CartContext)
    let checkedcart = cartItems.find((item)=>{ return item.data._id === props.data._id })
    let checkedwishlist = wishlist.find((item)=>{ return item.data._id === props.data._id })
   return(
       <>
         {
          props.Loader === "Loader" ? 
             <div className="product-card-loader" key={props.data._id}>
               <Loader/> 
             </div>
            : 
            <div className="product-card flex-col" key={props.data._id}>
                <Link to={"/productDetails/"+props.data._id} target="_blank" rel="noopener noreferrer" onClick={()=>getSingleSelectedData(props.data)} > 
                 <div className="discount-shape">
                     <div className="discount-shape-text">
                           {props.data.percentOff}%
                     </div>
                 </div>
                 <div className="product-card-image" style={{backgroundImage:`url(${props.data.Image})`}}></div>
                 <div className="flex-col row-gap-05rem">
                    <div className="product-card-title">{props.data.title}</div>
                    <div className="flex-row col-gap-2rem flex-justify-content-center">
                            ₹{props.data.saleingprice} 
                           <strike className="text-cross"> {props.data.costprice} </strike>   
                    </div>
                  <div>
                    <Rating cardtype="product_topoffer" value={Number(props.data.Rating)} reviewText={props.data.Reviews} />
                  </div>  
                 </div>
                 </Link>
                 <div className="flex-row col-gap-2rem flex-justify-content-end product-card-bottom">
                        <button class={checkedwishlist?"fa-solid fa-heart":"fa-solid fa-heart curser-pointer"} 
                                onClick={()=>{ addToWishList(props) }} 
                                disabled={checkedwishlist}>  
                        </button>
                        <button class={checkedcart?"fa-solid fa-basket-shopping ":"fa-solid fa-basket-shopping curser-pointer" } 
                                onClick={()=>addToCart(props)} 
                                disabled={checkedcart}>  
                        </button>
                </div>
            </div>
         }
       </>
   )
}

const CardWishList=(props)=>{
    const {addToCart,removeWishList,getSingleSelectedData,cartItems} = useContext(CartContext)
    let checkedcart = cartItems.find((item)=>{ return item.data._id === props.data.data._id })
   return(
       <>
         {
            props.Loader === "Loader" ? 
             <div className="product-card-loader" key={props.data.data._id}>
               <Loader/> 
             </div>
            : 
            <div className="product-card flex-col" key={props.data.data._id}>
                <Link to={"/productDetails/"+props.data.data._id} target="_blank" rel="noopener noreferrer" onClick={()=>getSingleSelectedData(props.data.data)} > 
                  <div className='top-left-horizontal-shape'>      
                      <div className="bottom-shape-text"> </div> 
                  </div>
                  <div className="top-left-vertical-shape"> 
                      <div className="top-shape-text"> </div>  
                  </div>
                  <div className="product-card-image" style={{backgroundImage:`url(${props.data.data.Image})`}}></div>
                  <div className="flex-col row-gap-05rem">
                      <div className="product-card-title">{props.data.data.title}</div>
                      <div className="flex-row col-gap-2rem flex-justify-content-center">
                              ₹{props.data.data.saleingprice} 
                            <strike className="text-cross"> {props.data.data.costprice} </strike>   
                      </div>
                      <div>
                          <Rating cardtype="product_wishlist" value={Number(props.data.data.Rating)} reviewText={props.data.data.Reviews} />
                      </div>    
                  </div>
                 </Link>
                 <div className="flex-row col-gap-2rem flex-justify-content-end product-card-bottom">

                        <button class={checkedcart?"fa-solid fa-basket-shopping ":"fa-solid fa-basket-shopping curser-pointer" } 
                                onClick={()=>{addToCart(props.data);removeWishList(props.data.data._id)}} 
                                disabled={checkedcart}>  
                        </button>

                      <button class="fa-solid fa-xmark curser-pointer" onClick={()=>removeWishList(props.data.data._id)}></button>
                </div>
            </div>
         }
       </>
   )
}

export {CardProduct1,Card_ProductList,CardTOPOFFER,CardWishList}