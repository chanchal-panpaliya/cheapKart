//react
import { useContext,useEffect } from 'react';
//css
import "./AddToWishList.css";
//component
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { CardWishList } from "../../components/Card/Card";
//context
import CartContext from '../../context/cart/CartContext';
//img
import login_image from '../../img/login-image.png'


const AddToWishList =() =>{
    const {wishlist} = useContext(CartContext);
    useEffect(()=>{
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    },[])
    return(
        <div>
            <Header/>
            <div className='flex-row flex-justify-content-center typography-padding-top-right-bottom-left margin-top-right-bottom-left'>
               <h2> My WishList </h2>
            </div>
            <div class="small-container small-container-m cart-page flex-row flex-justify-content-center"> 
                { wishlist.length===0?
                    <div className='flex-col flex-align-item-center row-gap-2rem flex-justify-content-center'>
                        <div> Wishlist is empty </div>
                        <div> <img src={login_image} /> </div>
                   </div>
                    : 
                  <div className='typography-padding-top-right-bottom-left wishlist-cart-display'>
                     { 
                    wishlist.length>0?
                        wishlist.map((item,index)=>{
                                return(
                                    <CardWishList data={item} key={index}/>
                                )
                            }) 
                        : <div> empty </div>      
                    }
                     </div>
                }
            </div>
            <Footer/>
        </div>
    )
}

export default AddToWishList;