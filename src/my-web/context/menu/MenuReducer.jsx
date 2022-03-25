export const MenuReducer = (state,action) =>{
    switch(action.type){
        case "MENU_SELECTED" :{
            localStorage.setItem('MENU_SELECTED', action.payload);
            return {...state,selectedMenu : action.payload}
        }
       
        default :
        return state
     }
}


export const SingleProductData = (state,action) =>{
     switch(action.type){
         case "DATA_SELECTED" :{
             localStorage.setItem('DATA_SELECTED', JSON.stringify(action.payload));
              return {...state,getsingledata : action.payload}
         }
        
         default :
         return state
      }
 }

export default {MenuReducer,SingleProductData};