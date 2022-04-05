export const checkout_reducer = (state,action)=>{

        switch(action.type){
            case "CHECKOUT_DATA" :{
                return {...state,checkoutdata : action.payload}
            }
           
            default :
            return state
         }
    
}