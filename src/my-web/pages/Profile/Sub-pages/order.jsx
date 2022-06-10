import "./index.css";
import "../../CheckOut/CheckOut.css";
import { useState ,useContext} from "react";
import CartContext from "../../../context/cart/CartContext";
import moment from "moment";

const Order =()=>{  
  let {ordersummarydata} = useContext(CartContext)
 return(
    <div>
        {
          ordersummarydata.length>0 ? ordersummarydata.map((item,index)=>{
            let key = 1; key = key + index;
            return(
                    <div className="table order-summary-flex" key={index}>
                        <h3> Order Summary {key} : </h3>
                        <div className='row-table'>
                        <div className='column-table'> <b> paymentId </b> </div>
                        <div className='column-table'> { item.paymentId} </div>
                    </div>
                    <div className='row-table'>
                        <div className='column-table'> <b> cartItems </b> </div>
                        <div className='column-table'> 
                        {
                            item.cartItems.Items.map((cartdata,cartindex)=>{
                                return(
                                        <div className='row-table' key={cartindex}>
                                            <div className='column-table'> 
                                                <div class="cart-info">
                                                    <img className='table-img' src={cartdata.data.Image}/>
                                                <div>
                                                <p>{cartdata.data.title}</p>
                                                <small> Price : ₹{cartdata.data.saleingprice} </small>
                                                <small> ExtraOff: ₹{cartdata.data.extraOff} </small>
                                                <small> Quantity : {cartdata.qty}</small>
                                            </div>
                                          </div>
                                        </div>
                                        </div>
                                       )})
                        }
                        </div>
                    </div>
                    <div className='row-table'>
                        <div className='column-table'> <b> amount </b> </div>
                        <div className='column-table'> 
                        <div className="flex-col">
                            <div>Coupancode : {item.cartItems.Coupancode}</div>
                            <div>Delivery : {item.cartItems.Delivery}</div>
                            <div>Discount : {item.cartItems.Discount} %</div>
                            <div>Total: <b>Rs.{item.amount}</b></div>
                        </div>
                    </div>
                    </div>
                    <div className='row-table'>
                        <div className='column-table'> <b> Date </b> </div>
                        <div className='column-table'> 
                        <div className="flex-col">
                              {moment(new Date()).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                        </div>
                    </div>
                    </div>
                    <div className='row-table'>
                        <div className='column-table'> <b> Delivery Address </b> </div>
                            <div className='column-table'> 
                                <div className="flex-col">
                                    <b> {item.address.BillerName}</b>
                                        <div> Address: {item.address.BillerAddress} , {item.address.BillerCity} , {item.address.BillerState} ,
                                            {item.address.BillerCounty} - {item.address.BillerZipPostal}
                                        </div>
                                    <b> MO: {item.address.BillerMobileNumber} </b>
                                </div>
                            </div>                
                        </div>
                    </div>
                    )
                    }) : <div> No data found </div>
                }
           </div>
                                       
 )
}

export default Order