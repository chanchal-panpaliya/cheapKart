import "./Modal.css";
import SharePage from "../SharePage/SharePage";
import { useState , useContext} from "react";
//img
import ok from '../../img/ok.png';
import Plus from '../../img/logo512.png';
import { useNavigate , Link } from "react-router-dom";
//context
import CartContext from "my-web/context/cart/CartContext";

export const Modal =({data,modalClose})=>{
    return(
        <div className='modal'>
        <div className="modal-container">  
            <div className='modal-right-side'>
                <div className='modal-right-flex-row'>
                   <SharePage data={data}/>
                </div> 
            </div>
            <i className='material-icons modal-close' onClick={modalClose}> x </i>
        </div>
    </div> 
    )
}

export const CouponCodeModal=({modalClose})=>{
    const [count,setcount]=useState(3);
    const [randomtext,setrandomtext]=useState("");
    const [getinput,setinput]=useState("");
    const [textmsg,settextmsg]=useState("");

   const handleApplyCode=()=>{
        const CODE = [
            {
            count:3,
            code: ["ACOPxR","PORCDc","12PUX1","SNO6V","MU4WFS"],
            discount: 30
            },
            {
            count:2,
            code: ["ABC123","PQR279","XYZ098","QST098","09PRWR"],
            discount: 20
            },
            {
            count:1,
            code: ["BANER40","BALEWA","BANER12","PUNE89","MB12XS"],
            discount: 10
            }
        ];

         if(getinput === randomtext){
            let getcode = CODE.filter((item)=>{ if(item.count === count){return item}})
            let randomcodename = getcode[0].code[Math.floor(Math.random() * getcode[0].code.length)]
             settextmsg("CONGRATULATIONS !!! Your Coupan Code is  "+randomcodename )
             localStorage.setItem("coupancode", randomcodename);
             setcount(0)
         }else{
                setcount(count => count - 1)
                let data = (Math.random() + 1).toString(36).substring(7)
                setrandomtext(data)
                settextmsg("Sorry ! you failed ")
         }
         
   }


   return(
    <div className='modal'>
    <div className="modal-container">  
        <div className='modal-right-side'>
            <div className='modal-right-flex-row'>
                <div className="flex-col row-gap-2rem flex-justify-content-center flex-align-item-center">
                    <h3> Apply coupan code and get discount </h3>
   
                    <button className="button-coupan-code" 
                            onClick={()=>{setrandomtext((Math.random() + 1).toString(36).substring(7))}}> 
                            click here !
                    </button>
                    {
                        randomtext!=="" ? 
                        <div className="random-number-box"> 
                            {randomtext}
                        </div>
                        :null
                    }
                    
                    <div className="flex-row  col-gap-2rem textField-container">  
                       <input type="text"  value={getinput} onChange={(e)=>{setinput(e.target.value)}} className="text-input"/>
                       <label className="text-placeholder"> Enter random number </label>                                                
                    </div>

                    <ol>
                        <li> Click the above button "click here". </li>
                        <li> After that, fill in the above text box with random text.</li>
                        <li> Click on "apply for code"</li>
                        <li> If the text matches,then you will get a coupan code.</li>
                        <li> Note : A coupon code will be automatically applied. </li>
                        <li> You have only 3 attempts. </li>
                    </ol>

                     <div> {textmsg} {count>0 && count<3?<span> try again! attepted count remaining {count}</span>:null}</div> 
                        {
                            getinput&& randomtext &&(<button className={count===0?"button-coupan-code-disable":"button-coupan-code"} onClick={handleApplyCode} disabled={count===0}> Apply for code </button>)
                        }
                    </div> 
            </div> 
        </div>
        <i className='material-icons modal-close' onClick={modalClose}> x </i>
      </div>
    </div> 
   )
}

export const Modal_OrderSummary =({data,modalClose})=>{
    let navigate = useNavigate()
    let {getcheckoutdata} = useContext(CartContext)
    return(
        <div className='modal'>
        <div className="modal-container">
            <div className='modal-left-side'>
                <h4> Payment Id : {data.paymentId} </h4>
                <h4> Cart Item:  <Link to="/profile" onClick={()=>{modalClose; localStorage.setItem("route","order")}}> view </Link> </h4>
                <h4> Total Amount : {data.amount} </h4>
                <div>
                    <b> {data.address.BillerName}</b>
                    <div> Address: {data.address.BillerAddress} , {data.address.BillerCity} , {data.address.BillerState} ,
                                    {data.address.BillerCounty} - {data.address.BillerZipPostal}
                    </div>
                    <b>
                      MO: {data.address.BillerMobileNumber}
                    </b>
                </div>          
                <img className='modal-order-img' src={Plus}/>                       
            </div>  
            <div className='modal-right-side'>
                <div className='modal-right-flex-col-order'>
                       <img className='modal-success-img' src={ok} />
                       <h2>Transaction Successful</h2>
                       <h1> Thank You for shopping</h1>
                       <Link to="/" onClick={()=>{modalClose;}}> Shop More </Link>
                </div> 
            </div>
            <button className='modal-close-modal' onClick={()=> {modalClose;navigate('/');getcheckoutdata("checkoutdone");}}> <i class="fa-solid fa-xmark"></i> </button>
        </div>
    </div> 
    )
}


