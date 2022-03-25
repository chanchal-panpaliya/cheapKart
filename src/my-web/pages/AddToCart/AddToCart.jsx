//react
import { useContext} from 'react';
//componet
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
//api

//context
import CartContext from '../../context/cart/CartContext';
//css
import './AddToCart.css';
//img
import login_image from '../../img/login-image.png'

const AddToCart = () =>{
const {cartItems,removeItem,IncrementQuntity,DecreamentQuntity} = useContext(CartContext);
   
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
                                return(
                                    <tr key={index}>
                                    <td> 
                                        <div class="cart-info">
                                            <img src={item.data.Image}/>
                                                <div>
                                                    <p>{item.data.title}</p>
                                                    <small> Price : {item.data.saleingprice} </small>
                                                    <small> ExtraOff: {item.data.extraOff} </small>
                                                    <br/>
                                                    <button onClick={()=>removeItem(item.data._id)}> remove </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>   
                                            <button onClick={()=>IncrementQuntity(item.data._id)}> + </button>
                                            <input type="number" placeholder={Number(item.data.quntity)} disabled/>
                                            <button onClick={()=>DecreamentQuntity(item.data._id)}> - </button> 
                                        </td>
                                        <td>  {(Number(price)-Number(item.data.extraOff))*Number(item.data.quntity)}  </td>
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
                                            {
                                                cartItems.length>0 && cartItems.reduce((amount, item) =>{
                                                        let price = item.data.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
                                                        let sale_cost  = Number(price);
                                                        let quntity = Number(item.data.quntity);
                                                        let extraoff = Number(item.data.extraOff);
                                            
                                                        return ((sale_cost-extraoff)*quntity) + amount}, 0)
                                                }
                                        </td>
                                    </tr>
                                    <tr> 
                                        <td> Tax </td>
                                        <td> 75  </td>
                                    </tr>
                                    <tr> 
                                        <td> Total </td>
                                        <td> 
                                            {
                                                cartItems.length>0 && cartItems.reduce((amount, item) =>{
                                                    let price = item.data.saleingprice.replace(/\,(\d\d)$/, ".$1").replace(',','');
                                                    let sale_cost  = Number(price);
                                                    let quntity = Number(item.data.quntity);
                                                    let extraoff = Number(item.data.extraOff);
                                                    return ((sale_cost-extraoff)*quntity) + amount}, 0) + 75    
                                            }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td> </td>
                                        <td>  <Button> Checkout </Button> </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>                    
                    }
              </div>
       <Footer/>
       </div>
   )
}



export default AddToCart;