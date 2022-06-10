import "./index.css";
import "../../CheckOut/CheckOut.css";
import { useEffect ,useState} from "react";

const UserProfile = () =>{
    const [userdata,setuserdata]=useState([])

    useEffect(()=>{

        if(localStorage.getItem("user") != null){
            setuserdata(JSON.parse(localStorage.getItem("user")))
        }
  
      },[setuserdata]) 


 return(
     <div>
            <div className="table">
                <div className='row-table'>
                    <div className='column-table'> <b> FirstName </b> </div>
                    <div className='column-table'> {userdata.firstName || userdata.firstname}</div>
                </div>
                <div className='row-table'>
                    <div className='column-table'> <b> LastName </b> </div>
                    <div className='column-table'> {userdata.lastName || userdata.lastname}</div>
                </div>  
                <div className='row-table'>
                    <div className='column-table'> <b> Email-id </b> </div>
                    <div className='column-table'> {userdata.email}</div>
                </div>                   
            </div>
     </div>
 )
}
export default UserProfile;