import './CheckOut.css';
//react
import { useContext ,useEffect ,useState} from 'react';
//component
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
//context
import CartContext from '../../context/cart/CartContext';


const Checkout=()=>{
    const {checkoutdata,addressItem,billingItem,getbillingItem} = useContext(CartContext);

    const [FirstName,SetFirstName]=useState("");
    const [LastName,SetLastName]=useState("");
    const [EmailId,SetEmailId]=useState("");


  
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
            SetBillerName(billingItem.FirstName)
            SetBillerAddress(billingItem.Address)
            SetBillerCity(billingItem.City)
            SetBillerMobileNumber(billingItem.MobileNumber)
            SetBillerState(billingItem.State)
            SetBillerZipPostal(billingItem.ZipPostal)
        }
       },0)
       return ()=>{clearTimeout(time)}
    })

   

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
                                                    <small> Quntuty : {item.data.quntity}</small>
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
                        <h4> Payment Info </h4>
                        <form className="table-checkout"> 
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        <label>
                                            <input type="radio" name='pay'/>
                                            Test Gateway
                                        </label>
                                    </div>
                                    <div className="column-table-checkout">
                                        <label>
                                            <input type="radio" name='pay'/>
                                            Credit card
                                        </label>
                                    </div>
                                </div>
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="number" name="creditcardnumber"  placeholder="0000111100001111" className="text-input"  required/>
                                            <label className="text-placeholder"> credit card number </label>                                                
                                        </div>
                                    </div>
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="number" name="Mobile Number"  placeholder="Billing zip Code" className="text-input"  required/>
                                            <label className="text-placeholder"> Billing zip Code </label>                                                
                                        </div>
                                    </div>
                                </div>
                                <div className="row-table-checkout">
                                    <div className="column-table-checkout ">
                                        <label> Month </label>
                                        <select> 
                                                <option value="JAN">  JAN </option>
                                        </select>
                                       
                                        <label> Year </label>
                                        <select> 
                                                <option value="JAN">  2022 </option>
                                        </select>  
                                    </div>
                                    <div className="column-table-checkout">
                                        <div className="flex-row  col-gap-2rem textField-container">  
                                            <input type="number" name="CVC"  placeholder="CVC" className="text-input"  required/>
                                            <label className="text-placeholder"> CVC </label>                                                
                                        </div> 
                                    </div>
                                </div>
                        </form>
                   </article>
                   <article>
                        <h4> Billing Address  </h4>
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
                   <Button> Complete Checkout and Pay</Button>
               </section>
               
            </div>                   
        <Footer/>
    </div>
    )
}

export default Checkout;