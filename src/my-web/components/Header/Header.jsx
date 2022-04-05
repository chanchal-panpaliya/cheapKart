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

    let [flagAuth_SignUp,setflagAuth_SignUp]=useState(false);
    let [flagAuth_SignIn,setflagAuth_SignIn]=useState(false);
    let [flagAuth_ForgotPass,setflagAuth_ForgotPass]=useState(false);
    const [getTite,setTitle]=useState("");
    const [alldata,setalldata] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const {cartItems,wishlist,getSingleSelectedData} = useContext(CartContext);
    const navigate = useNavigate();
    const [getid_product,setid_product] = useState("");
     
    
    
    useEffect(()=>{
        fetchAllCartData().then(function(result){
            setalldata(result)  
        });
     },[])

  
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
                                      {searchResults.map(item => <p className="searchList" onClick={()=>openProductDetailsPage(item)}>{item.title}</p>)}
                                </div></>
                            : null
                        }
                       
                        <button className='header-search-button'> search </button>
                   </div>
                </div>
              {/* /Login/ */}
              <div className='header-right-container'>
                  <div className='header-login-container'>
                        <button className='header-button-login'> Login </button>
                        <div class="dropdown-login-content">
                            <a href="#" onClick={(e)=>setflagAuth_SignUp(true)} > 
                                Sign Up
                            </a>
                        </div>
                  </div>
                  <div className='header-more-container'>
                        <button className='header-button-more'> More </button>
                        <div class="dropdown-more-content">
                            <Link to="/addtowishlist"> Wish List ({wishlist.length}) </Link>
                        </div>
                  </div>
                  <div>
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
                  </div>
              </div>
              <div className='header-right-end'>
              </div>
        </div>

   {/*/  for code review person -  here i'm tried to made one dialog (modal). 
    / only changing a data without close modal component /
    / not used router for modal - bz header is outsider component - router not work here/
    here i'm passing a data as a component for routing feature.
    date 4-4-22 : initially i was new to react.now i know what i did mistake .i will update code. 

    */}

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