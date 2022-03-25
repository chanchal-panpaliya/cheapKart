//react
import {useParams} from 'react-router-dom';
import { useEffect , useState ,useContext} from 'react';
//context
import CartContext from '../../context/cart/CartContext';
//call api
import { fetchProductDetailsData } from '../../useEffect/useEffectCart';
//component
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProductMenu from '../../components/Menu/ProductMenu';
//sub files - components
import TopOffer_ProductDetails from './SubPages/TopOffer';
import Grocery_ProductDetails from './SubPages/Grosary';
import Mobile_ProductDetails from './SubPages/Mobile';
import Fashion_ProductDetails from './SubPages/Fashion';
import Electronics_ProductDetails from './SubPages/Electronics';
import Home_ProductDetails from './SubPages/Home';
import Application_ProductDetails from './SubPages/Application';
import BeautyToysMoreData_ProductDetails from './SubPages/BeautyToy';
//css
import "./ProductDetails.css";
import "../Home/Home.css";

const ProductDetails = () =>{
     const {getsingledata} = useContext(CartContext);
     const {id} = useParams();
     const [productData,SetProductData] = useState([]);

    useEffect(()=>{
       let selectedProduct = JSON.parse(localStorage.getItem('DATA_SELECTED'));
        fetchProductDetailsData(id).then(function(result){
            console.log(result)
             if(result=== null){
                SetProductData(selectedProduct)  
             }else{
                SetProductData(result)
             }
         })       
    },[])


    return(
        <div className='Product-box'>
            <Header/>
            <ProductMenu/>
            <div className='ProductDetails-Container'> 
              
                {
                    productData.categoryName === "Top Offer" ? <TopOffer_ProductDetails data={productData}/> : null 
                }
                {
                    productData.categoryName === "Grocery" ? <Grocery_ProductDetails data={productData}/>: null
                }
                {
                    productData.categoryName === "Mobiles" ? <Mobile_ProductDetails data={productData}/>: null
                }
                {
                    productData.categoryName === "Fashion" ? <Fashion_ProductDetails data={productData}/> : null
                }
                {
                    productData.categoryName === "Electronics" ? <Electronics_ProductDetails data={productData}/> : null
                }
                {
                    productData.categoryName === "Home" ? <Home_ProductDetails data={productData}/>: null
                }
                {
                    productData.categoryName === "Appliances" ? <Application_ProductDetails data={productData}/> : null
                }
                {
                    productData.categoryName === "Beauty, Toys & More" ? <BeautyToysMoreData_ProductDetails data={productData}/> : null
                }
              
                
           </div>
           <Footer/>
        </div>
    )
}

export default ProductDetails;
