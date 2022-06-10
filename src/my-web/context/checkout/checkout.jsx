export const checkout_reducer = (state,action)=>{

        switch(action.type){
            case "CHECKOUT_DATA" :{
                  if(action.payload === "checkoutdone"){
                    return {...state,checkoutdata : ""}
                  }else{
                    return {...state,checkoutdata : action.payload}
                  }
            }
            default :
            return state
         }
    
}

export const ordersummary_reducer = (state,action)=>{

    switch(action.type){
        case "ORDER_DATA" :{
                return {...state,ordersummarydata : [...state.ordersummarydata , action.payload]}
        }
        default :
        return state
     }

}