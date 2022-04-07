export const AddressReducer = (state,action) =>{
    switch(action.type){
        case "ADD_ADDRESS" :{
            return {...state,addressItem : [...state.addressItem , action.payload]}
        }

        case "Edit_ADDRESS":{
            return{...state,
                addressItem : state.addressItem.map((item)=>{
                    if(item.id === action.payload.id){
                        return action.payload
                    }else{
                        return item
                    }
                })
            }
        }

        case "Delete_ADDRESS":{
            return{...state,addressItem : state.addressItem.filter(item=>item.id!==action.payload)}
        }

        case "Billing_Address":{
            return {...state,billingItem : action.payload}
        }

        default :
        return state
     }
}