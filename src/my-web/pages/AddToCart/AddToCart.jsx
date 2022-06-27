//react
import { useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
//componet
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { CouponCodeModal } from '../../components/Modal/Modal';
//api

//context
import CartContext from '../../context/cart/CartContext';
//css
import './AddToCart.css';
//img
import login_image from '../../img/login-image.png'
//constant
import { CouponCODE } from '../../constant/copancode';
//api call
import {updateProductQty,removeFromCart,addToWishlistHandler} from '../../useEffect/useEffectCart';


const AddToCart = () =>{
const {cartItems,addToWishList,wishlist,getcheckoutdata,addToCart,toastdispatch} = useContext(CartContext);
const [openmodal,setopenmodal]=useState(false)
const [getcoupancode,setcoupancode]=useState("");
const [getcoupanDiscount,setgetcoupanDiscount]=useState(0);


useEffect(()=>{
    window.scrollTo({ behavior: 'smooth', top: '0px' });
    let time = setTimeout(()=>{
        const coupancode=
        localStorage.getItem("coupancode") == null
          ? ""
          : localStorage.getItem("coupancode")
    
          setcoupancode(coupancode)
    
          if(coupancode!==""){ 
            let data = CouponCODE.filter((item)=>{                
                    if(item.code.includes(getcoupancode)){
                        return item
                    } 
               })
               if(data.length>0){
                setgetcoupanDiscount(data[0].discount)
               }
           }
    },0)
    return ()=>clearTimeout(time) 
})


const renderTotalAmount=()=>{
   let gettotalamount =  cartItems.length>0 && cartItems.reduce((amount, item) =>{
        let price = item.data.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
        let sale_cost  = Number(price);
        let quntity = Number(item.qty);
        let extraoff = Number(item.data.extraOff);
        return ((sale_cost-extraoff)*quntity) + amount}, 0) + 75  

    let discounttotal = gettotalamount - (gettotalamount * (getcoupanDiscount/100))

    return(
       <div> ₹{Math.round(discounttotal)}</div>        
    )
}

const renderSubAmount=()=>{
        let getsubamount = cartItems.length>0 && cartItems.reduce((amount, item) =>{
        let price = item.data.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
        let sale_cost  = Number(price);
        let quntity = Number(item.qty);
        let extraoff = Number(item.data.extraOff);

        return ((sale_cost-extraoff)*quntity) + amount}, 0)
        
        return(
            <div> ₹{getsubamount} </div>
        )
}

const handlecheckout=()=>{

    let gettotalamount =  cartItems.length>0 && cartItems.reduce((amount, item) =>{
        let price = item.data.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
        let sale_cost  = Number(price);
        let quntity = Number(item.qty);
        let extraoff = Number(item.data.extraOff);
        return ((sale_cost-extraoff)*quntity) + amount}, 0)

    let discounttotal = gettotalamount - (gettotalamount * (getcoupanDiscount/100)) + 75

     let data = {
         Items : cartItems,
         Subamount:gettotalamount,
         Delivery:75,
         Total: gettotalamount + 75,
         Coupancode:getcoupancode,
         Discount:getcoupanDiscount,
         Finaltotal:Math.round(discounttotal)
     }
   
     getcheckoutdata(data) 
}

   return(
       <div>
         <Header/>  
             <div className='flex-row flex-justify-content-center typography-padding-top-right-bottom-left margin-top-right-bottom-left'>
               <h2> Add To Cart </h2>
            </div>
            <div class="small-container small-container-m cart-page typography-padding-top-right-bottom-left"> 
                { cartItems.length===0?
                    <div className='flex-col flex-align-item-center row-gap-2rem flex-justify-content-center'>
                        <div> cart is empty </div>
                        <div> <img src={login_image} alt="login-image"/></div>
                    </div>
                : 
                    <div> 
                      <table>
                        <tbody>
                        <tr>
                            <th> Product </th>
                            <th> Quantity </th>
                            <th> Subtotal </th>
                        </tr>
                        {
                            cartItems.map((item,index)=>{
                                let price = item.data.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
                                let checkedwishlist = wishlist.find((wish_item)=>{ return wish_item.data._id === item.data._id })
                                return(
                                    <tr key={index}>
                                    <td> 
                                        <div class="cart-info">
                                            <img src={item.data.Image}/>
                                                <div>
                                                    <p>{item.data.title}</p>
                                                    <small> Price : ₹{item.data.saleingprice} </small>
                                                    <small> ExtraOff: ₹{item.data.extraOff} </small>
                                                    <br/>
                                                    <div className='flex-row col-gap-2rem'> 
                                                        <button className={checkedwishlist?'':'text-color-primary'} 
                                                        onClick={(e)=>{
                                                            addToWishlistHandler(e,item,addToWishList,toastdispatch);
                                                            removeFromCart(e,item.data._id,addToCart,toastdispatch);
                                                            
                                                        }} 
                                                            disabled={checkedwishlist}
                                                        > 
                                                               move to wishlist 
                                                        </button>
                                                        <button className='text-color-red' onClick={(e)=>
                                                            removeFromCart(e,item.data._id,addToCart,toastdispatch)
                                                            } > remove </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>   
                                            <button onClick={(e)=>updateProductQty(e,item.data._id,addToCart,"increment",toastdispatch)}> + </button>
                                            <input type="number" placeholder={Number(item.qty)} disabled/>
                                            <button 
                                                 onClick={(e)=>{
                                                    item.qty===1?removeFromCart(e,item.data._id,addToCart,toastdispatch) :
                                                    updateProductQty(e,item.data._id,addToCart,"decrement",toastdispatch)
                                                 }
                                                }
                                             > - </button> 
                                        </td>
                                        <td>  {(Number(price)-Number(item.data.extraOff))*Number(item.qty)}  </td>
                                    </tr>
                                )})
                            }
                            </tbody>
                            </table>
                            
                            <div class="total-price">
                                <table>
                                    <tbody>
                                    <tr> 
                                        <td> Subtotal </td>
                                        <td>  
                                             {renderSubAmount()}
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td> Delivery Charges </td>
                                        <td> ₹75  </td>
                                    </tr>
                                    {
                                    getcoupancode!==""?
                                    <tr>
                                        <td> Coupon Code </td>
                                        <td> 
                                            {getcoupancode} <small> ({getcoupanDiscount}% discount) </small>  
                                        </td>
                                    </tr>
                                    :null
                                    }
                                    <tr> 
                                        <td> Total </td>
                                        <td> 
                                            {
                                               renderTotalAmount()  
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='flex-row flex-align-item-center'> 
                                             {
                                                 getcoupancode===""?
                                                 <>
                                                     <label> Apply Coupon Code? </label> 
                                                     <input type="checkbox" value={openmodal} checked={openmodal===true} 
                                                     onClick={(e)=>{setopenmodal(!openmodal);setinputbox(!showinputbox)}} />
                                                 </>
                                                  :
                                                  <label> 
                                                    <small> 
                                                    This coupan code, by default, is applied for the whole day. You will generate the new coupan code the next day.
                                                    </small>
                                                    <h4> Happy Shopping! </h4>
                                                  </label> 
                                             }
                                             
                                        </td>
                                        <td>  
                                           
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> 
                                        </td>
                                        <td>  
                                            <Link to={'/checkout'}> <Button disabled={cartItems.length===0} handleClick={handlecheckout}> Proceed to Checkout </Button> </Link> 
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>                    
                    }
              </div>
              {openmodal?<CouponCodeModal modalClose={()=>setopenmodal(false)} />:null}
       <Footer/>
       </div>
   )
}



export default AddToCart;