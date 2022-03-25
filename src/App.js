import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'; 
//css
import './App.css';
//component
import Home from "./my-web/pages/Home/Home";
import AddToCart from './my-web/pages/AddToCart/AddToCart';
import AddToWishList from './my-web/pages/AddToWishList/AddToWishList';
import ProductList from './my-web/pages/ProductList/ProductList';
import ProductDetails from './my-web/pages/ProductDetails/ProductDetails';
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
               <Route path="/addtocart" element={<AddToCart/>} />
               <Route path="/addtowishlist" element={<AddToWishList/>} />
               <Route path="/product" element={<ProductList/>}/>
               <Route path="/productDetails/:id" element={<ProductDetails/>}/>
         </Routes>
        </Router>  
        <Toast data={toastList} />
    </div>
     
    </div>
  );
}

export default App;