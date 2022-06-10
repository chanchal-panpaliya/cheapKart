import "./index.css";
import "../../CheckOut/CheckOut.css";
import { Modal_Address_Add ,Modal_Address_Edit ,Modal_Confirm} from "../../../components/Modal/Modal-Address";
import { useState ,useContext} from "react";
import CartContext from "../../../context/cart/CartContext";
const Address =()=>{
  const [openmodal,setopenmodal]=useState(false)
  const [editmodal,seteditmodal]=useState(false)
  const [deletemodal,setdeletemodal]=useState(false);
  const [selectedAddress,setselectedAddress]=useState("");

  let {addressItem} = useContext(CartContext)

  return(
      <div>
           <button className="address-button-add" onClick={()=>setopenmodal(!openmodal)}> Add Address </button>
                   <div className="flex-col row-gap-2rem">
                       {
                          addressItem.length>0 ? addressItem.map((item,index)=>{
                               let key = 1;
                                key = key + index;
                               return(
                                    <div className="table" key={index}>
                                      <label> Address {key}</label>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> FirstName </b> </div>
                                        <div className='column-table'> 
                                             {item.FirstName}
                                        </div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> LastName </b> </div>
                                        <div className='column-table'> 
                                             {item.LastName}
                                        </div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> Emailid </b> </div>
                                        <div className='column-table'> 
                                             {item.Emailid}
                                        </div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> MobileNumber </b> </div>
                                        <div className='column-table'> 
                                             {item.MobileNumber}
                                        </div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> Address </b> </div>
                                        <div className='column-table'> 
                                             {item.Address}
                                        </div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> City </b> </div>
                                        <div className='column-table'> 
                                             {item.City}
                                        </div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> State </b> </div>
                                        <div className='column-table'> 
                                             {item.State}
                                        </div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> ZipPostal </b> </div>
                                        <div className='column-table'> 
                                             {item.ZipPostal}
                                        </div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> 
                                          
                                        </div>
                                        <div className='column-table address-fun-button'> 
                                          <button className="address-button-edit" onClick={()=>{seteditmodal(!editmodal);setselectedAddress(item)}}> Edit </button>
                                          <button className="address-button-remove" onClick={()=>{setdeletemodal(!deletemodal);setselectedAddress(item)}}> Remove </button>
                                        </div>
                                    </div>
                                    </div>
                               )
                           }) : null

                       }
                    </div>
          

           {
             openmodal ? <Modal_Address_Add modalClose={()=>setopenmodal(false)}/> : null
           }
           {
             editmodal ? <Modal_Address_Edit data={selectedAddress} modalClose={()=>seteditmodal(false)}/>:null
           }
           {
             deletemodal? <Modal_Confirm data={selectedAddress} modalClose={()=>setdeletemodal(false)}/> : null
           }

      </div>
  )
}

export default Address;