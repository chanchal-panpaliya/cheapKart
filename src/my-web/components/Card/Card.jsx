//react
import { useContext } from 'react';
import { Link } from 'react-router-dom';
//css
import './Card.css';
//compoenet
import Rating from '../Rating/Rating';
import Loader from '../Loader/Loader';
//context
import CartContext from '../../context/cart/CartContext';


const CardProduct1=(props)=>{
     const {addToCart,addToWishList,getSingleSelectedData} = useContext(CartContext)
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
                            <Rating value={Number(props.data.Rating)} reviewText={props.data.Reviews} />
                            </div>
                      </div>
                    </Link>
                    <div className="flex-row col-gap-2rem flex-justify-content-end product-card-bottom">
                    <i class="fa-solid fa-heart curser-pointer" onClick={()=>addToWishList(props)}></i>
                    <i class="fa-solid fa-basket-shopping curser-pointer" onClick={()=>addToCart(props)}></i>
                  </div>
             </div>
          }
        </>
    )
}



const Card_ProductList=(props)=>{
    const {addToCart,addToWishList,getSingleSelectedData} = useContext(CartContext)
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
                        <Rating value={Number(props.data.Rating)} reviewText={""} />
                        <div className="typography-padding-top-right"> 
                        {
                            props.data.categoryName === "Mobiles" ?
                            props.data.Highlights.map((item)=>{return <li> {item} </li>}):null
                        }
                        <Link to={"/productDetails/"+props.data._id} target="_blank" rel="noopener noreferrer" onClick={()=>getSingleSelectedData(props.data)} > 
                          view more ...
                        </Link>
                        </div>
                        <div className="productlist_card-card-button">
                          <button className="button bg-cr-addtocart " onClick={()=>addToCart(props)}> Add To Cart </button>
                          <button className="button bg-cr-addtowishlist " onClick={()=>addToWishList(props)}> Add To Wishlist </button>
                      </div>
                      </div>
                </div>
           </div>
        }
        </>
    )
}


const CardTOPOFFER=(props)=>{
    const {addToCart,addToWishList,getSingleSelectedData} = useContext(CartContext)
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
                    <Rating value={Number(props.data.Rating)} reviewText={props.data.Reviews} />
                  </div>  
                 </div>
                 </Link>
                 <div className="flex-row col-gap-2rem flex-justify-content-end product-card-bottom">
                           <i class="fa-solid fa-heart curser-pointer" onClick={()=>addToWishList(props)}></i>
                           <i class="fa-solid fa-basket-shopping curser-pointer" onClick={()=>addToCart(props)}></i>
                </div>
            </div>
         }
       </>
   )
}

const CardWishList=(props)=>{
    const {addToCart,removeWishList,getSingleSelectedData} = useContext(CartContext)
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
                          <Rating value={Number(props.data.data.Rating)} reviewText={props.data.data.Reviews} />
                      </div>    
                  </div>
                 </Link>
                 <div className="flex-row col-gap-2rem flex-justify-content-end product-card-bottom">
                      <i class="fa-solid fa-xmark curser-pointer" onClick={()=>removeWishList(props.data.data._id)}></i>
                      <i class="fa-solid fa-basket-shopping curser-pointer" onClick={()=>addToCart(props.data)}></i>
                </div>
                
            </div>
         }
       </>
   )
}

export {CardProduct1,Card_ProductList,CardTOPOFFER,CardWishList}