//react
import { useContext, useState , useEffect} from 'react';
import { Link ,useNavigate ,useLocation } from "react-router-dom";
//img
import Plus from '../../img/golden-star.png';
//component
import { AuthModal } from '../Auth/Auth';
import { Registration ,Login , ForgotPassword} from '../Auth/Auth';
//css
import './Header.css';
//context
import CartContext from '../../context/cart/CartContext';
import {fetchAllCartData,fetchProductDetailsData} from '../../useEffect/useEffectCart';


const Header =() =>{
    const {cartItems,wishlist,getSingleSelectedData} = useContext(CartContext);


    let [flagAuth_SignUp,setflagAuth_SignUp]=useState(false);
    let [flagAuth_SignIn,setflagAuth_SignIn]=useState(false);
    let [flagAuth_ForgotPass,setflagAuth_ForgotPass]=useState(false);
    const [getTite,setTitle]=useState("");
    const [alldata,setalldata] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [islogin,setlogin]=useState(false);
    const [logoutclick,setlogoutclick]=useState(false);
    const [auth_data,Set_auth_data]=useState([]);
    const [token,settoken]=useState("");
    const navigator = useNavigate()
 

    useEffect(()=>{

        fetchAllCartData().then(function(result){
            setalldata(result)  
        });
          
     },[])

         
     useEffect(()=>{
         let time = setTimeout(()=>{
            if(localStorage.getItem("token") != null ){
                settoken(localStorage.getItem("token"))
                Set_auth_data(JSON.parse(localStorage.getItem("user")))
                setlogin(true)
            }
         },0)
         return ()=>clearTimeout(time)
    })


     const handleLogout=(e)=>{
        if (localStorage.getItem('token')!= null) { 
                localStorage.removeItem("cartItems")
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                localStorage.removeItem("wishlist")
            window.location.reload();
            navigator("/") 
        }
     }

     const handleChange =(e)=>{
        setTitle(e.target.value);
        let filterdatabytitle = alldata.filter((item)=>{
             return item.title.toLowerCase().includes(getTite.toLowerCase()) 
        })
        setSearchResults(filterdatabytitle)
     }

     const openProductDetailsPage = (item) => {
         getSingleSelectedData(item)
         let selectedProduct = JSON.parse(localStorage.getItem('DATA_SELECTED'));
          window.open(window.location.origin+`/productDetails/${selectedProduct._id}`, '_blank', 'noopener,noreferrer')
         setSearchResults([])
         setTitle('')
      }

    return(
     <div className='header-container'>
        <div className='header-container-flex'>
            {/* /LoGo/ */}
            <div className='header-left-end'>

            </div>
            <div className='header-logo'>
                <div>
                    <Link to="/" > 
                        <i style={{color:"white"}}>  <h2> cheapKart </h2> </i>
                    </Link>
                </div>
                <div className='logo-sub-heading'>
                    <small className='small-logo-content'> Explore Plus </small> 
                    <img className='logoimage-size-small' src={Plus}/>
                </div>
            </div>
               {/* /Search Bar/ */}
               <div className='flex-row'>
                   <div className='header-search'>
                        <input className='header-search-input' type="search" placeholder='Search for products by title'value={getTite} onChange={handleChange}/>
                        {
                            getTite!==""?
                             searchResults.length !== 0 && <> 
                                <div className='searchResults'>
                                      {searchResults.map((item,index) => <p key={index} className="searchList" onClick={()=>openProductDetailsPage(item)}>{item.title}</p>)}
                                </div></>
                            : null
                        }
                       
                        <button className='header-search-button'> search </button>
                   </div>
                </div>
              {/* /Login/ */}
              <div className='header-right-container'>
                  <div className='header-login-container'>
                        <button className='header-button-login'> {localStorage.getItem("token") != null?"Logout":"Login"}  </button>
                        <div class="dropdown-login-content">
                            { localStorage.getItem("token") != null ?  <b> Hi! {auth_data.firstName || auth_data.firstname}</b> : null}
                            { localStorage.getItem("token") != null ? <Link to="/profile"> Profile </Link> : null}
                            {
                                localStorage.getItem("token") != null ? 
                                 <button className='logout-button' onClick={handleLogout}> logout </button>
                                 : 
                                 <a href="#" onClick={(e)=>setflagAuth_SignIn(true)} className="flex-row flex-justify-content-center flex-align-item-center"> 
                                   <b> Login </b> 
                                 </a>
                            }
                        </div>
                  </div>
                  <div className='header-more-container'>
                        <button className='header-button-more'> More </button>
                        <div class="dropdown-more-content">
                           {
                               localStorage.getItem("token") != null? <Link to="/addtowishlist"> Wish List ({wishlist.length}) </Link> : <Link to="/"> Wish List (0) </Link>
                           } 
                        </div>
                  </div>
                  <div>
                      {
                          localStorage.getItem("token") != null?
                          <Link to="/addtocart"> 
                          <button className='header-button-cart'> 
                          {cartItems.length>0?
                            <div className='itemcount'>
                                <span>
                                    {cartItems.length}
                                </span>
                            </div>:""} 
                          <i class="fa-solid fa-cart-shopping"></i>
                            <b> Cart </b>
                          </button>
                          </Link>
                          :
                          <Link to="/"> 
                          <button className='header-button-cart'> 
                          {cartItems.length>0?
                            <div className='itemcount'>
                                <span>
                                    0
                                </span>
                            </div>:""} 
                          <i class="fa-solid fa-cart-shopping"></i>
                            <b> Cart </b>
                          </button>
                          </Link>
                      }
                  </div>
              </div>
              <div className='header-right-end'>
                    
              </div>
        </div>

        {flagAuth_SignUp?
            <AuthModal 
                onClose={() => setflagAuth_SignUp(false)} 
                IsModal="SignUp" 
                data={<Registration Lopen={()=> {setflagAuth_SignIn(true); setflagAuth_SignUp(false) ; setflagAuth_ForgotPass(false)}} 
                        onClose={() => setflagAuth_SignUp(false)} /> }
                HeadingLabel = "Looks like you're new here!"
                SubHeadingLabel = "Sign up to get started"
            />:null}

        {flagAuth_SignIn?
               <AuthModal 
                onClose={() => setflagAuth_SignIn(false)}
                IsModal="SignIn" 
                data={
                <Login 
                    FPopen={()=> {setflagAuth_SignIn(false); setflagAuth_SignUp(false) ; setflagAuth_ForgotPass(true)}} 
                    Ropen={()=> {setflagAuth_SignIn(false); setflagAuth_SignUp(true) ; setflagAuth_ForgotPass(false)}} 
                    onClose={() => setflagAuth_SignIn(false)}
                /> }
                HeadingLabel = "Login"
                SubHeadingLabel = "Get access to your Orders, Wishlist and Recommendations"
            />:null}
        {
            flagAuth_ForgotPass?
            <AuthModal 
            onClose={() => setflagAuth_ForgotPass(false)}
            IsModal="ForgotPassword" 
            data={
            <ForgotPassword 
                Lopen={()=> {setflagAuth_SignIn(true); setflagAuth_SignUp(false) ; setflagAuth_ForgotPass(false)}}
                Ropen={()=> {setflagAuth_SignIn(false); setflagAuth_SignUp(true) ; setflagAuth_ForgotPass(false)}} 
                onClose={() => setflagAuth_ForgotPass(false)}
            /> }
            HeadingLabel = "Forgot Password?"
            SubHeadingLabel = "Forgot Password"
        />
            :
            null
        }

     </div>
    )
  }

  export default Header;