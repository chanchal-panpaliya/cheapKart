import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'; 
//css
import './App.css';
//component
import Home from "./my-web/pages/Home/Home";
import AddToCart from './my-web/pages/AddToCart/AddToCart';
import AddToWishList from './my-web/pages/AddToWishList/AddToWishList';
import ProductList from './my-web/pages/ProductList/ProductList';
import ProductDetails from './my-web/pages/ProductDetails/ProductDetails';
import Checkout from './my-web/pages/CheckOut/Checkout';
import PageNotFound from './my-web/pages/404error/pagenotfound';
import Profile from './my-web/pages/Profile/Profile';
// import OrderSummary from 'my-web/pages/CheckOut/OrderSummary';
//Toast
import { Toast } from './my-web/components/Toast/Toast';
//constext
import { useContext } from 'react';
import CartContext from './my-web/context/cart/CartContext';
//mockBee

function App() {
  const {toastList} = useContext(CartContext);
  
  return (
    <div className="container">
      <div>
        <Router>
         <Routes>
               <Route exact path="/" element={<Home/>}/>
               <Route path="/product" element={<ProductList/>}/>
               <Route path="/productDetails/:id" element={<ProductDetails/>}/>
               <Route path="*" element={<PageNotFound/>}/>
               {
                 localStorage.getItem("token") != null?
                 <>
                    <Route path="/addtocart" element={<AddToCart/>} />
                    <Route path="/addtowishlist" element={<AddToWishList/>} />
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    {/* <Route path="/ordersummary" element={<OrderSummary/>}/> */}
                 </>:
                 <>
                    <Route path="/addtocart" element={<Home/>} />
                    <Route path="/addtowishlist" element={<Home/>} />
                    <Route path="/checkout" element={<Home/>}/>
                    <Route path="/profile" element={<Home/>}/>
                 </>
               }
               
         </Routes>
        </Router>  
        <Toast data={toastList} />
    </div>
     
    </div>
  );
}

export default App;