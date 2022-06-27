import { useReducer ,useEffect } from "react";
import CartContext from './CartContext';
import CartReducer from  './CartReducer';
import ToastReducer from '../Toast/ToastReducer';
import FilterReducer from "../Filterdata/FilterReducer";
import { checkout_reducer ,ordersummary_reducer} from "../checkout/checkout";
import {MenuReducer,SingleProductData} from "../menu/MenuReducer";
import { AddressReducer } from "../address/addressReducer";
//services
import { getcart,getwishlist } from "my-web/useEffect/useEffectCart";

const CartState =({ children })=>{

const cartItems=
    localStorage.getItem("cartItems") == null || localStorage.getItem("cartItems") == "undefined"
      ? []
      : JSON.parse(localStorage.getItem("cartItems"))

const wishlist =
    localStorage.getItem("wishlist") == null || localStorage.getItem("wishlist") == "undefined"
      ? []
      : JSON.parse(localStorage.getItem("wishlist"))

    // add cart
    const [state,dispatch] = useReducer(CartReducer,{ cartItems , wishlist})
    //toast
    const [toast,toastdispatch] = useReducer(ToastReducer,{showToast:false , toastList : []})
    //filter data
    const [filter,filterdispatch] = useReducer(FilterReducer,{
        sortBy: "",
        ram: { _4GB: false, _6GB: false , _12GB:false , _32GB:false },rom: { _32GB: false, _64GB: false , _128GB:false , _256GB:false },expandableMemory:"",
        price: 100000,discount: "",rating:"",productName: "",extraoff:"",
        GrosaryType:[],GrosaryBrand:[],FashionType:[],FashionColor:[],Electronicstype:[],Hometype:[],Appliancestype:[],MoreBrand:[],MoreType:[]
    })
    //menu selected
    const [menu,selectedmenudispatch] = useReducer(MenuReducer,{selectedMenu:""})
    //getsingle data
    const [singledata,singledatadispatch] = useReducer(SingleProductData,{getsingledata:""})
    //chcekout data
    const [checkout,checkoutdispatch]=useReducer(checkout_reducer,{checkoutdata:""})
    //order summary
    const [order,orderdispatch]=useReducer(ordersummary_reducer,{ordersummarydata:[]})
    //address management
    const [address,addressdispatch]=useReducer(AddressReducer,{addressItem:"",billingItem:[]});

   //useeffect
   useEffect(() => {
     if(localStorage.getItem("token") != null){
         getcart().then((res)=>{
                     state.cartItems = res
         })

         getwishlist().then((res)=>{
                 state.wishlist = res 
         })
     }
  },[state.cartItems,state.wishlist,checkout.checkoutdata,address.addressItem,order.ordersummarydata]);

 
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
    }

    //remove cart
   const removeItem = (id) =>{
       dispatch({type:'REMOVE_ITEM',payload:id})
       toastdispatch({type:'DANGER',payload:"Product Remove From Cart"})
   }


   //addtowishlist
   const addToWishList = (item) =>{
    dispatch({type:'ADD_TO_WISHLIST',payload:item})
   }

   //remove wishlist
   const removeWishList = (id) =>{
    dispatch({type:'REMOVE_WISHLIST',payload:id})
   }

   //toast
   const deleteToast = (id) =>{
       toastdispatch({type:'REMOVE_TOAST',payload:id})  
   }

   //checkoutdispatch
   const getcheckoutdata = (item)=>{
    checkoutdispatch({type:'CHECKOUT_DATA',payload:item})
   }

   //order summary
   const getordersummary=(item)=>{
      orderdispatch({type:'ORDER_DATA',payload:item})
   }

   //add address
   const addAddress=(item)=>{
    addressdispatch({type:'ADD_ADDRESS',payload:item})
    toastdispatch({type:'SUCCESS',payload:"Address Added"})
   }
   //edit
   const editAddress=(item)=>{
     addressdispatch({type:'Edit_ADDRESS',payload:item}) 
     toastdispatch({type:'INFO',payload:"Address EDITED"})
   }
   //delete
   const deleteAddress=(id)=>{
    addressdispatch({type:'Delete_ADDRESS',payload:id}) 
    toastdispatch({type:'DANGER',payload:"Address removed"})
  }

  //selected
  const getbillingItem=(item)=>{
    addressdispatch({type:'Billing_Address',payload:item})
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
            checkoutdata:checkout.checkoutdata,
            addressItem:address.addressItem,
            billingItem:address.billingItem,
            ordersummarydata : order.ordersummarydata,
            filter,
            //
            filterdispatch,
            toast,
            toastdispatch,
            // 
            addToCart ,
            removeItem ,
            addToWishList ,
            removeWishList ,
            deleteToast ,
            menuselected,
            //
            getSingleSelectedData,
            //
            getcheckoutdata,
            getordersummary,
            //
            addAddress,
            editAddress,
            deleteAddress,
            //
            getbillingItem
        
        }}>
            { children }
        </CartContext.Provider>
    )

}

export default CartState;