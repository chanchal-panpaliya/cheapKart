// import ToastReducer from "../Toast/ToastReducer";

const CartReducer=(state,action)=>{

    switch(action.type){  
        //Add to cart
        case 'ADD_TO_CART' :{
            const checker = state.cartItems.find((item) => {
                return item.data._id === action.payload.data._id;
              });
              if(checker) {
                let updatecart = state.cartItems.map((item,index)=>{
                    return {
                        "data" : { ...item.data, quntity : item.data._id === action.payload.data._id ? Number(item.data.quntity) + 1 : item.data.quntity }
                    } 
                 })
                 return{...state,cartItems:updatecart}
              }
              return {...state,cartItems : [...state.cartItems , action.payload]}
        }   
        //remove item from cart
        case 'REMOVE_ITEM' :{
            return{...state,cartItems : state.cartItems.filter(item=>item.data._id!==action.payload)}
        }
        //increment by one
        case 'Increment_Quntity':{
            let updatecart = state.cartItems.map((item,index)=>{
                 
                    return {
                        "data" : { ...item.data, quntity : item.data._id === action.payload ? Number(item.data.quntity) + 1 : item.data.quntity }
                    } 
            })
            return{...state,cartItems:updatecart}
        }
        //decrement by one
        case 'Decreament_Quntity':{
            let updatecart = state.cartItems.map((item,index)=>{
                return{
                    "data" : { ...item.data, quntity : item.data._id === action.payload ? Number(item.data.quntity) - 1 : item.data.quntity }
                }
            }).filter(item=>{
                if(item.data.quntity==0){
                   // want to add some condition
                }
               return item.data.quntity!==0
            }) 
            return{...state,cartItems:updatecart}
        }
        // add to wishlist
        case 'ADD_TO_WISHLIST':{
            return{...state,wishlist : [...state.wishlist,action.payload]}
        }
        //remove wishlist
        case 'REMOVE_WISHLIST' : {
            return{...state,wishlist : state.wishlist.filter(item=>item.data._id!==action.payload)}  
        }
        //default   
        default :
        return state
    }
}

export default CartReducer;

