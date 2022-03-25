const FilterReducer =(state,action)=>{
  
    switch(action.type){
       case "HIGH_TO_LOW":{
            return { ...state, sortBy: action.type };
       }
       case "LOW_TO_HIGH":{
            return { ...state, sortBy: action.type };
       }
       case "PRICE": return { ...state,price: action.payload};
       case "CLEAR":
            return {
              sortBy: "",
              ram: { _4GB: false, _6GB: false , _12GB:false , _32GB:false },
              rom: { _32GB: false, _64GB: false , _128GB:false , _256GB:false },
              expandableMemory:"",
              price: 100000,
              discount: "",
              rating:"",
              productName: "",
              extraoff:""
            };
        case "DISCOUNT": return { ...state, discount: parseInt(action.value, 10)};

        case "EXTRAOFF": return{ ...state, extraoff : action.value}

        case "RATING":{ 
             return{ ...state,rating: parseInt(action.value,10)}
        }
        case "SEARCH_PRODUCTS":{
          return { ...state, productName: action.payload};
        }   
        case "Mobile_RAM_4GB":{
          return{ ...state, ram: {...state["ram"],_4GB: !state.ram._4GB}}
        }
        case "Mobile_RAM_6GB":{
          return{ ...state,ram: {...state["ram"],_6GB: !state.ram._6GB}}
        }
        case "Mobile_RAM_12GB":{
          return{...state, ram: {...state["ram"],_12GB: !state.ram._12GB}}
         }
         case "Mobile_RAM_32GB":{
          return{...state,ram: {...state["ram"],_32GB: !state.ram._32GB}}
         }
         case "Mobile_ROM_32GB":{
          return{...state, rom: {...state["rom"],_32GB: !state.rom._32GB}}
         }
         case "Mobile_ROM_64GB":{
          return{...state,rom: {...state["rom"],_64GB: !state.rom._64GB}}
         }
         case "Mobile_ROM_128GB":{
          return{...state,rom: {...state["rom"],_128GB: !state.rom._128GB}}
         }
         case "Mobile_ROM_256GB":{
          return{...state,rom: {...state["rom"],_256GB: !state.rom._256GB}}
         }
         case "ExpandableMemory":{
          return{...state,expandableMemory: action.value}
         }
        default:
            return state;
    }
        
}

export default FilterReducer;