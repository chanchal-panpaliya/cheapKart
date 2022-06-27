const CartReducer=(state,action)=>{

    switch(action.type){  

        case 'ADD_TO_CART' :{
                    return { ...state, cartItems: action.payload }
        }  
        
        
        case 'REMOVE_ITEM' :{
            return { ...state, cartItems: action.payload }
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

