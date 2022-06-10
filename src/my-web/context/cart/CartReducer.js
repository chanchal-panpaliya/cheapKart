const CartReducer=(state,action)=>{

    switch(action.type){  

        case 'ADD_TO_CART' :{
                    return { ...state, cartItems: action.payload }
        }  
        
        
        case 'REMOVE_ITEM' :{
            return { ...state, cartItems: action.payload }
        }


        case 'Increment_Quntity':{
            let updatecart = state.cartItems.map((item,index)=>{
                    return {
                        "data" : { ...item.data, quntity : item.data._id === action.payload ? Number(item.data.quntity) + 1 : Number(item.data.quntity) }
                    } 
            })
         
            return{...state,cartItems:updatecart}
        }


        case 'Decreament_Quntity':{
            let updatecart = state.cartItems.map((item,index)=>{
                return{
                    "data" : { ...item.data, quntity : item.data._id === action.payload ? Number(item.data.quntity) - 1 : item.data.quntity }
                }
            }).filter(item=>{
                if(item.data.quntity==0){
                
                }
               return item.data.quntity!==0
            }) 
            return{...state,cartItems:updatecart}
        }


        case 'ADD_TO_WISHLIST':{   
            return { ...state, wishlist: action.payload }
        }


        case 'REMOVE_WISHLIST' : {
            return { ...state, wishlist: action.payload }
        }

           
        default :
        return state
    }
}

export default CartReducer;

