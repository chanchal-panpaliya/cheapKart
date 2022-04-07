import "./index.css";
import "../../CheckOut/CheckOut.css";
import { useEffect ,useState} from "react";

const UserProfile = () =>{
    const [userdata,setuserdata]=useState([])

    useEffect(()=>{

        if(localStorage.getItem("login") != null){
            setuserdata(JSON.parse(localStorage.getItem("login")))
        }
  
      },[setuserdata]) 


 return(
     <div>
            <div className="table">
                       {
                           userdata.map((item,index)=>{
                               return(
                                   <>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> FirstName </b> </div>
                                        <div className='column-table'> {item.FirstName}</div>
                                    </div>
                                    <div className='row-table'>
                                        <div className='column-table'> <b> LastName </b> </div>
                                        <div className='column-table'> {item.LastName}</div>
                                    </div>  
                                    <div className='row-table'>
                                        <div className='column-table'> <b> Email-id </b> </div>
                                        <div className='column-table'> {item.email}</div>
                                    </div>
                                   </>
                               )
                           })

                       }

        </div>
     </div>
 )
}
export default UserProfile;