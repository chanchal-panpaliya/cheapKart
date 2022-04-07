import { useState ,useContext} from "react";
import { v4 as uuid } from "uuid";
import "./Modal.css";
import CartContext from "../../context/cart/CartContext";


export const Modal_Address_Add=({modalClose})=>{

    let {addAddress} = useContext(CartContext);

    const [FirstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [Emailid,setEmailid]=useState("");
    const [MobileNumber,setMobileNumber]=useState("");
    const [Address,setAddress]=useState("");
    const [State,setState]=useState("");
    const [City,setCity]=useState("");
    const [ZipPostal,setZipPostal]=useState("");


    const handleAddAddress =()=>{
        let data = {
            userid:1,
            id:uuid(),
            FirstName: FirstName ,
            LastName : LastName,
            Emailid : Emailid,
            MobileNumber : MobileNumber,
            Address : Address,
            State:State,
            City:City,
            ZipPostal:ZipPostal
        }
        addAddress(data)
        modalClose()
    }

return(
    <div className='modal'>
    <div className="modal-container">  
        <div className='modal-right-side'>
            <div className='modal-right-flex-row'>
                <section className="table-checkout"> 
                    <div className="row-table-checkout">
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="firstName"  placeholder="John" className="text-input" value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} required/>
                                <label className="text-placeholder"> Enter First Name </label>                                                
                            </div>
                        </div>
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="lastName"  placeholder="Snow" className="text-input" value={LastName} onChange={(e)=>{setLastName(e.target.value)}}  required/>
                                <label className="text-placeholder"> Enter Last Name </label>                                                
                            </div>
                        </div>
                    </div>
                    <div className="row-table-checkout">
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="email" name="email-id"  placeholder="JohnSnow@gmail.com" className="text-input" value={Emailid} onChange={(e)=>{setEmailid(e.target.value)}}  required/>
                                <label className="text-placeholder"> Email-id </label>                                                
                            </div>
                        </div>
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="number" name="Mobile Number"  placeholder="8600444543" className="text-input" value={MobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}} required/>
                                <label className="text-placeholder"> Mobile Number </label>                                                
                            </div>
                        </div>
                    </div>
                    <div className="row-table-checkout">
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="Address"  placeholder="shivaji nagar pune" className="text-input" value={Address} onChange={(e)=>{setAddress(e.target.value)}} required/>
                                <label className="text-placeholder"> Address </label>                                                
                            </div>
                        </div>
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="State"  placeholder="maharashtra" className="text-input" value={State} onChange={(e)=>{setState(e.target.value)}} required/>
                                <label className="text-placeholder"> State </label>                                                
                            </div>
                        </div>
                    </div>
                    <div className="row-table-checkout">
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="City"  placeholder="pune" className="text-input" value={City} onChange={(e)=>{setCity(e.target.value)}} required/>
                                <label className="text-placeholder"> City </label>                                                
                            </div>
                        </div>
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="number" name="Zip/Postal"  placeholder="411002" className="text-input" value={ZipPostal} onChange={(e)=>{setZipPostal(e.target.value)}} required/>
                                <label className="text-placeholder"> Zip/Postal </label>                                                
                            </div>
                        </div>
                    </div>
                    {
                        FirstName && LastName && Emailid && MobileNumber && Address && State && City && ZipPostal && (
                            <button onClick={handleAddAddress}> Add Address </button>
                        )
                    }
                    
                </section>
            </div> 
        </div>
        <i className='material-icons modal-close' onClick={modalClose}> x </i>
    </div>
</div>
)
}

export const Modal_Address_Edit=({data,modalClose})=>{

    let {editAddress} = useContext(CartContext);

    const [FirstName,setFirstName]=useState(data.FirstName);
    const [LastName,setLastName]=useState(data.LastName);
    const [Emailid,setEmailid]=useState(data.Emailid);
    const [MobileNumber,setMobileNumber]=useState(data.MobileNumber);
    const [Address,setAddress]=useState(data.Address);
    const [State,setState]=useState(data.State);
    const [City,setCity]=useState(data.City);
    const [ZipPostal,setZipPostal]=useState(data.ZipPostal);

    let editdata = {
        userid:data.userid,
        id:data.id,
        FirstName: FirstName ,
        LastName : LastName,
        Emailid : Emailid,
        MobileNumber : MobileNumber,
        Address : Address,
        State:State,
        City:City,
        ZipPostal:ZipPostal
    }

    const handleEditAddress=()=>{
        
        editAddress(editdata)
        modalClose()
    }

return(
    <div className='modal'>
    <div className="modal-container">  
        <div className='modal-right-side'>
            <div className='modal-right-flex-row'>
                <section className="table-checkout"> 
                    <div className="row-table-checkout">
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="firstName"  placeholder="John" className="text-input" value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} required/>
                                <label className="text-placeholder"> Enter First Name </label>                                                
                            </div>
                        </div>
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="lastName"  placeholder="Snow" className="text-input" value={LastName} onChange={(e)=>{setLastName(e.target.value)}}  required/>
                                <label className="text-placeholder"> Enter Last Name </label>                                                
                            </div>
                        </div>
                    </div>
                    <div className="row-table-checkout">
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="email" name="email-id"  placeholder="JohnSnow@gmail.com" className="text-input" value={Emailid} onChange={(e)=>{setEmailid(e.target.value)}}  required/>
                                <label className="text-placeholder"> Email-id </label>                                                
                            </div>
                        </div>
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="number" name="Mobile Number"  placeholder="8600444543" className="text-input" value={MobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}} required/>
                                <label className="text-placeholder"> Mobile Number </label>                                                
                            </div>
                        </div>
                    </div>
                    <div className="row-table-checkout">
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="Address"  placeholder="shivaji nagar pune" className="text-input" value={Address} onChange={(e)=>{setAddress(e.target.value)}} required/>
                                <label className="text-placeholder"> Address </label>                                                
                            </div>
                        </div>
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="State"  placeholder="maharashtra" className="text-input" value={State} onChange={(e)=>{setState(e.target.value)}} required/>
                                <label className="text-placeholder"> State </label>                                                
                            </div>
                        </div>
                    </div>
                    <div className="row-table-checkout">
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="text" name="City"  placeholder="pune" className="text-input" value={City} onChange={(e)=>{setCity(e.target.value)}} required/>
                                <label className="text-placeholder"> City </label>                                                
                            </div>
                        </div>
                        <div className="column-table-checkout">
                            <div className="flex-row  col-gap-2rem textField-container">  
                                <input type="number" name="Zip/Postal"  placeholder="411002" className="text-input" value={ZipPostal} onChange={(e)=>{setZipPostal(e.target.value)}} required/>
                                <label className="text-placeholder"> Zip/Postal </label>                                                
                            </div>
                        </div>
                    </div>
                    {
                        FirstName && LastName && Emailid && MobileNumber && Address && State && City && ZipPostal && (
                            <button onClick={handleEditAddress}> Edit Address </button>
                        )
                    }
                    
                </section>
            </div> 
        </div>
        <i className='material-icons modal-close' onClick={modalClose}> x </i>
    </div>
</div>
)
}

export const Modal_Confirm =({data,modalClose})=>{
    let {deleteAddress} = useContext(CartContext);

    const handleDeletedAddress=()=>{
        deleteAddress(data.id)
        modalClose()
    }

   return(
    <div className='modal'>
    <div className="modal-container">  
        <div className='modal-right-side'>
            <div className='modal-right-flex-row'>
                <div className="flex-col">
                    <section> Do you want to delete this address permeantly?  </section>
                    <section className="flex-row col-gap-1rem flex-justify-content-center flex-align-item-center">  
                        <button 
                           className="button button-outline-primary button-onhover-fillbackground"
                           onClick={handleDeletedAddress}> Yes </button>
                        <button className="button button-outline-primary button-onhover-fillbackground" onClick={modalClose}> No </button>
                    </section>
                </div>
            </div> 
        </div>
        <i className='material-icons modal-close-modal' onClick={modalClose}> close </i>
    </div>
</div> 
   )
}