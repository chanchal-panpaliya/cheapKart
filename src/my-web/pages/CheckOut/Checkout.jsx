import './CheckOut.css';
//react
import { useContext ,useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
//component
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
//modal
import { Modal_Address_Add } from "../../components/Modal/Modal-Address";
import {Modal_OrderSummary} from "../../components/Modal/Modal";
//img
import Plus from '../../img/logo512.png';
//context
import CartContext from '../../context/cart/CartContext';


const Checkout=()=>{
    const navigate = useNavigate();
    const {checkoutdata,addressItem,billingItem,getbillingItem,getordersummary} = useContext(CartContext);
    const [FirstName,SetFirstName]=useState("");
    const [LastName,SetLastName]=useState("");
    const [EmailId,SetEmailId]=useState("");
    const [openmodal,setopenmodal]=useState(false)
    const [ordermodal,setordermodal]=useState(false)
    const [orderdata,setorderdata]=useState([])

        const[BillerName,SetBillerName]=useState("");
        const[BillerCounty,SetBillerCountry]=useState("");
        const[BillerAddress,SetBillerAddress]=useState("");
        const[BillerCity,SetBillerCity]=useState("");
        const[BillerMobileNumber,SetBillerMobileNumber]=useState("");
        const[BillerState,SetBillerState]=useState("");
        const[BillerZipPostal,SetBillerZipPostal]=useState("")
     

    useEffect(()=>{
        window.scrollTo({ behavior: 'smooth', top: '0px' });
        if(localStorage.getItem("user")!==null){
             let getuserinfo = JSON.parse(localStorage.getItem("user"))
             SetFirstName(getuserinfo.firstName || getuserinfo.firstname) 
             SetLastName(getuserinfo.lastName || getuserinfo.lastname)  
             SetEmailId(getuserinfo.email)  
        }
        
    },[])

    useEffect(()=>{
       let time = setTimeout(()=>{
        if(billingItem!==""){
            let fullname = billingItem.FirstName!==undefined ? `${billingItem.FirstName} ${billingItem.LastName}` : ""
            SetBillerName(fullname)
            SetBillerAddress(billingItem.Address)
            SetBillerCity(billingItem.City)
            SetBillerMobileNumber(billingItem.MobileNumber)
            SetBillerState(billingItem.State)
            SetBillerZipPostal(billingItem.ZipPostal)
        }
       },0)
       return ()=>{clearTimeout(time)}
    })

   //payment
   const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    const options = {
      key: "rzp_test_JTpMiaE4ZqOyY7", // Enter the Key ID generated from the Dashboard
      key_id: "rzp_test_JTpMiaE4ZqOyY7",
      key_secret: "dj5fTAWTojnXCzQSNlIKjnQm",
      name: "cheapkart",
      currency: "INR",
      amount: checkoutdata.Finaltotal * 100,
      description: "Thankyou for shopping with us",
      "image": Plus,
      handler: function (response) {

          let data = {
            paymentId: response.razorpay_payment_id,
            cartItems: checkoutdata,
            amount: checkoutdata.Finaltotal,
            address : {
                BillerName : BillerName ,
                BillerCounty : BillerCounty,
                BillerAddress : BillerAddress ,
                BillerCity : BillerCity,
                BillerMobileNumber : BillerMobileNumber ,
                BillerState : BillerState,
                BillerZipPostal : BillerZipPostal
            }
          }
           setorderdata(data)
           getordersummary(data)
           setordermodal(!ordermodal)
      },
      prefill: {
        name: `${BillerName}`,
        email: `${EmailId}`,
        contact: `${BillerMobileNumber}`,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

    return(
        <div>
        <Header/>
            <div className='flex-row flex-justify-content-center typography-padding-top-right-bottom-left margin-top-right-bottom-left'>
               <h2> CheckOut </h2>
            </div>
          
            <div className='checkout-container'>
            {   checkoutdata!==""?
               <section>
                   <h4> Item </h4>
                    <div className="table">
                         {
                            checkoutdata.Items.map((item,index)=>{
                                return(
                                    <div className='row-table' key={index}>
                                    <div className='column-table'> 
                                        <div class="cart-info">
                                            <img className='table-img' src={item.data.Image}/>
                                                <div>
                                                    <p>{item.data.title}</p>
                                                    <small> Price : ₹{item.data.saleingprice} </small>
                                                    <small> ExtraOff: ₹{item.data.extraOff} </small>
                                                    <small> Quantity : {item.qty}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )})
                            }
                    </div>
                    <h4> Price </h4>
                    <div className="table">
                        <div className='row-table'>
                            <div className='column-table'> <b> Rs.SubAmount </b> </div>
                            <div className='column-table'> ₹{checkoutdata.Subamount}</div>
                        </div>
                        <div className='row-table'>
                            <div className='column-table'> <b> Coupancode </b> </div>
                            <div className='column-table'> {checkoutdata.Coupancode}</div>
                        </div>  
                        <div className='row-table'>
                            <div className='column-table'> <b> Coupancode Discount </b> </div>
                            <div className='column-table'> {checkoutdata.Discount}%</div>
                        </div>
                        <div className='row-table'>
                            <div className='column-table'> <b>Delivery </b> </div>
                            <div className='column-table'> ₹{checkoutdata.Delivery}</div>
                        </div> 
                        <div className='row-table'>
                            <div className='column-table'> <b> Total </b> </div>
                            <div className='column-table'> ₹{checkoutdata.Finaltotal} </div>
                        </div>   
                    </div>

               </section>
               : 
               <div className='No-cart-added'> 
                  No product added
               </div>
            }
        
               <section className='flex-col row-gap-2rem'>
                   <article> 
                        <h4> Customer-Info </h4>
                        <section className="table-checkout"> 
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="text" name="firstName" value={FirstName} onChange={(e)=>SetFirstName(e.target.value)}  placeholder="John" className="text-input"  required/>
                                            <label className="text-placeholder"> Enter First Name </label>                                                
                                        </div>
                                    </div>
                                    <div className="column-table-checkout">
                                    <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="text" name="lastName" value={LastName} onChange={(e)=>{SetLastName(e.target.value)}} placeholder="Snow" className="text-input"  required/>
                                            <label className="text-placeholder"> Enter Last Name </label>                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="email" name="email-id" value={EmailId} onChange={(e)=>{SetEmailId(e.target.value)}} placeholder="JohnSnow@gmail.com" className="text-input"  required/>
                                            <label className="text-placeholder"> Email-id </label>                                                
                                        </div>
                                    </div>
                                    <div className="column-table-checkout">

                                    </div>
                                </div> 
                        </section>
                   </article>
                   <article>
                        <div className="flex-row flex-space-between flex-align-item-center">
                            <h4> Billing Address  </h4>
                            <button className="address-button-add" onClick={()=>setopenmodal(!openmodal)}> Add Address </button>
                        </div>

                        <form className="table-checkout"> 
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        {
                                            addressItem.length>0 ?
                                            addressItem.map((item,index)=>{
                                                let key=1;
                                                key = key + index;
                                                return(
                                                    <label>
                                                        <input type="radio" name="address" onChange={()=>getbillingItem(item)}/>
                                                        Address {key}
                                                    </label>
                                                )
                                            })
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="text" value={BillerName} onChange={(e)=>{SetBillerName(e.target.value)}} name="creditcardnumber"  placeholder="Billing Name" className="text-input"  required/>
                                            <label className="text-placeholder"> Billing Name </label>                                                
                                        </div>
                                    </div>
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="text" value={BillerCounty} onChange={(e)=>{SetBillerCountry(e.target.value)}} name="Country"  placeholder="Country" className="text-input"  required/>
                                            <label className="text-placeholder"> Country </label>                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="text" name="Address" value={BillerAddress} onChange={(e)=>{SetBillerAddress(e.target.value)}} placeholder="shivaji nagar pune" className="text-input"  required/>
                                            <label className="text-placeholder"> Address </label>                                                
                                        </div>
                                    </div>
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="text" name="State" value={BillerState} onChange={(e)=>{SetBillerState(e.target.value)}}  placeholder="maharashtra" className="text-input"  required/>
                                            <label className="text-placeholder"> State </label>                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="text" name="City" value={BillerCity} onChange={(e)=>{SetBillerCity(e.target.value)}}  placeholder="pune" className="text-input"  required/>
                                            <label className="text-placeholder"> City </label>                                                
                                        </div>
                                    </div>
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="number" name="Zip/Postal" value={BillerZipPostal} onChange={(e)=>{SetBillerZipPostal(e.target.value)}} placeholder="411002" className="text-input"  required/>
                                            <label className="text-placeholder"> Zip/Postal </label>                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="text" name="City" value={BillerMobileNumber} onChange={(e)=>{SetBillerMobileNumber(e.target.value)}} placeholder="pune" className="text-input"  required/>
                                            <label className="text-placeholder"> Mobile Number </label>                                                
                                        </div>
                                    </div>
                                </div>
                        </form>
                   </article>

                   {
                       BillerName && BillerCounty && BillerAddress && BillerState && BillerCity && BillerZipPostal && BillerMobileNumber && (
                            <Button handleClick={makePayment}> Complete Checkout and Pay</Button>
                       )
                   }

                   {
                       !BillerName && !BillerCounty && !BillerAddress && !BillerState && !BillerCity && !BillerZipPostal && !BillerMobileNumber && (
                            <button className="address-button-add" disabled> Complete Checkout and Pay</button>
                       )
                   }
                   
               </section>
               
            </div>                   
        <Footer/>
        {
             openmodal ? <Modal_Address_Add modalClose={()=>setopenmodal(false)}/> : null
        }
        {
            ordermodal? <Modal_OrderSummary data={orderdata} modalClose={()=>setordermodal(false)}/> : null
        }
    </div>
    )
}

export default Checkout;