//react
import { useState, useEffect ,useContext ,useRef} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//component
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserProfile from "./Sub-pages/userprofile";
import Address from "./Sub-pages/address";
import Order from "./Sub-pages/order";
//constant
import {submenulist} from "./constant";
//css
import './Profile.css';
import '../CheckOut/CheckOut.css';

const Profile=()=>{
    const [route,setRoute]=useState("profile")
    const navigate = useNavigate();
    const [side_toggle,setside_toggle] = useState(false)


    useEffect(()=>{
      window.scrollTo({ behavior: 'smooth', top: '0px' });
        const noteItems=
        localStorage.getItem("route") == null
          ? "profile"
          : localStorage.getItem("route")
  
        setRoute(noteItems)
  
      },[setRoute]) 
  
  
       const sidebarClose=()=>{
        setside_toggle(false)
       }

 return(
    <div>
       <Header/>
            <nav className="navbar"> 
              {route==="profile"?<h3> User Profile Details </h3>:null}
              {route==="address"?<h3> Address Details</h3>:null}
              {route==="order"?<h3> Order Details</h3>:null}
            <button className="button-profile" onClick={()=>setside_toggle(!side_toggle)}> open </button> 
            </nav>
            
            <div className="menu-container-grid">
              <div className={side_toggle?"sidebar-responsive":"sidebar"}>
                <div className={side_toggle?"sidebar-header flex-justify-content-flex-end":"sidebar-header"}> 
                        </div>
                <div className="sidebar-menulist">
                  <div className="sidebar__menu">
                    {
                      submenulist.map((item,index)=>{
                        return(
                          <div className={ item.route === route ?"sidebar__link active_menu_link":"sidebar__link"} 
                               key={index} onClick={() =>{setRoute(item.route); localStorage.setItem("route",item.route); sidebarClose()}}>
                            <label className="sidebar_button"> {item.name} </label>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              {/* main */}
              <main id="main">
                {route === "profile" && <UserProfile/>}
                {route === "address" && <Address/>}
                {route === "order" && <Order/>}
              </main>
           </div> 
    <Footer/>
</div>
 )
}
export default Profile;