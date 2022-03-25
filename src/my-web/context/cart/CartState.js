import { useReducer } from "react";
import CartContext from './CartContext';
import CartReducer from  './CartReducer';
import ToastReducer from '../Toast/ToastReducer';
import FilterReducer from "../Filterdata/FilterReducer";
import {MenuReducer,SingleProductData} from "../menu/MenuReducer";

const CartState =({ children })=>{

    // add cart
    const [state,dispatch] = useReducer(CartReducer,{ cartItems : [] , wishlist:[] })
    //toast
    const [toast,toastdispatch] = useReducer(ToastReducer,{showToast:false , toastList : []})
    //filter data
    const [filter,filterdispatch] = useReducer(FilterReducer,{
        sortBy: "",
        ram: { _4GB: false, _6GB: false , _12GB:false , _32GB:false },
        rom: { _32GB: false, _64GB: false , _128GB:false , _256GB:false },
        expandableMemory:"",
        price: 100000,
        discount: "",
        rating:"",
        productName: "",
        extraoff:""
    })
    //menu selected
    const [menu,selectedmenudispatch] = useReducer(MenuReducer,{selectedMenu:""})
    //getsingle data
    const [singledata,singledatadispatch] = useReducer(SingleProductData,{getsingledata:""})


    //singledata
    const getSingleSelectedData=(data)=>{
        singledatadispatch({type:"DATA_SELECTED",payload:data})
    }
    //menu selected
    const menuselected=(name)=>{
        selectedmenudispatch({type:"MENU_SELECTED",payload:name})
    }
 
    //addtocart
    const addToCart = (item) =>{
       dispatch({type:'ADD_TO_CART',payload:item})
       toastdispatch({type:'SUCCESS',payload:"Product Added To Cart"})
    }

    //remove cart
   const removeItem = (id) =>{
       dispatch({type:'REMOVE_ITEM',payload:id})
       toastdispatch({type:'DANGER',payload:"Product Remove From Cart"})
   }

   //increment
   const IncrementQuntity=(id)=>{
        dispatch({type:'Increment_Quntity',payload:id})
        toastdispatch({type:'INFO',payload:"Increment by one"})
   }

   //decrement
   const DecreamentQuntity=(id)=>{
        dispatch({type:'Decreament_Quntity',payload:id})
        toastdispatch({type:'INFO',payload:"Decrement by one"})
   }

   //addtowishlist
   const addToWishList = (item) =>{
    dispatch({type:'ADD_TO_WISHLIST',payload:item})
    toastdispatch({type:'SUCCESS',payload:"Product Added To Wishlist"})
   }

   //remove wishlist
   const removeWishList = (id) =>{
    dispatch({type:'REMOVE_WISHLIST',payload:id})
    toastdispatch({type:'DANGER',payload:"Product Removed From Wishlist"})
   }

   //toast
   const deleteToast = (id) =>{
       toastdispatch({type:'REMOVE_TOAST',payload:id})  
   }


    return(
        <CartContext.Provider value={{
            showcart : state.showCart,
            cartItems : state.cartItems ,
            wishlist : state.wishlist,
            toastList : toast.toastList,
             filterList : filter.filterList,
            selectedMenu:menu.selectedMenu,
            getsingledata:singledata.getsingledata,
            filter,
            //
            filterdispatch,
            // 
            addToCart ,
            removeItem ,
            IncrementQuntity,
            DecreamentQuntity,
            addToWishList ,
            removeWishList ,
            deleteToast ,
            menuselected,
            //
            getSingleSelectedData
        
        }}>
            { children }
        </CartContext.Provider>
    )

}

export default CartState;