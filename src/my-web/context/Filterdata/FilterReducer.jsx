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
              extraoff:"",
              GrosaryType:[],
              GrosaryBrand:[],
              FashionType:[],
              FashionColor:[],
              Electronicstype:[],
              Hometype:[],
              Appliancestype:[],
              MoreBrand:[],
              MoreType:[]
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

         case "GROSARY_TYPE":{
            if(action.status) {
              const newlabelArr = state.GrosaryType;
              newlabelArr.push(action.payload)
              return {
                  ...state,
                  ...state.GrosaryType,
                  GrosaryType: [...new Set(newlabelArr)]
              }
            }
            if(!action.satus) {
              const newlabelArr = state.GrosaryType.filter((item) => item !== action.payload)
              return {
                  ...state,
                  ...state.GrosaryType,
                  GrosaryType: [...new Set(newlabelArr)]
              }
            }
         }

         case "GROSARY_BRAND":{
          if(action.status) {
            const newlabelArr = state.GrosaryBrand;
            newlabelArr.push(action.payload)
            return {
                ...state,
                ...state.GrosaryBrand,
                GrosaryBrand: [...new Set(newlabelArr)]
            }
          }
          if(!action.satus) {
            const newlabelArr = state.GrosaryBrand.filter((item) => item !== action.payload)
            return {
                ...state,
                ...state.GrosaryBrand,
                GrosaryBrand: [...new Set(newlabelArr)]
            }
          }
       }

       case"Fashion_Type":{
        if(action.status) {
          const newlabelArr = state.FashionType;
          newlabelArr.push(action.payload)
          return {
              ...state,
              ...state.FashionType,
              FashionType: [...new Set(newlabelArr)]
          }
        }
        if(!action.satus) {
          const newlabelArr = state.FashionType.filter((item) => item !== action.payload)
          return {
              ...state,
              ...state.FashionType,
              FashionType: [...new Set(newlabelArr)]
          }
        } 
       }

       case "Fashion_Color":{
        if(action.status) {
          const newlabelArr = state.FashionColor;
          newlabelArr.push(action.payload)
          return {
              ...state,
              ...state.FashionColor,
              FashionColor: [...new Set(newlabelArr)]
          }
        }
        if(!action.satus) {
          const newlabelArr = state.FashionColor.filter((item) => item !== action.payload)
          return {
              ...state,
              ...state.FashionColor,
              FashionColor: [...new Set(newlabelArr)]
          }
        }
       }
       case "Electronics_type":{
        if(action.status) {
          const newlabelArr = state.Electronicstype;
          newlabelArr.push(action.payload)
          return {
              ...state,
              ...state.Electronicstype,
              Electronicstype: [...new Set(newlabelArr)]
          }
        }
        if(!action.satus) {
          const newlabelArr = state.Electronicstype.filter((item) => item !== action.payload)
          return {
              ...state,
              ...state.Electronicstype,
              Electronicstype: [...new Set(newlabelArr)]
          }
        } 
       }

       case "Home_type":{
        if(action.status) {
          const newlabelArr = state.Hometype;
          newlabelArr.push(action.payload)
          return {
              ...state,
              ...state.Hometype,
              Hometype: [...new Set(newlabelArr)]
          }
        }
        if(!action.satus) {
          const newlabelArr = state.Hometype.filter((item) => item !== action.payload)
          return {
              ...state,
              ...state.Hometype,
              Hometype: [...new Set(newlabelArr)]
          }
        }
       }

       case "Appliances_type":{
        if(action.status) {
          const newlabelArr = state.Appliancestype;
          newlabelArr.push(action.payload)
          return {
              ...state,
              ...state.Appliancestype,
              Appliancestype: [...new Set(newlabelArr)]
          }
        }
        if(!action.satus) {
          const newlabelArr = state.Appliancestype.filter((item) => item !== action.payload)
          return {
              ...state,
              ...state.Appliancestype,
              Appliancestype: [...new Set(newlabelArr)]
          }
        }
       }

       case "More_Brand":{
        if(action.status) {
          const newlabelArr = state.MoreBrand;
          newlabelArr.push(action.payload)
          return {
              ...state,
              ...state.MoreBrand,
              MoreBrand: [...new Set(newlabelArr)]
          }
        }
        if(!action.satus) {
          const newlabelArr = state.MoreBrand.filter((item) => item !== action.payload)
          return {
              ...state,
              ...state.MoreBrand,
              MoreBrand: [...new Set(newlabelArr)]
          }
        }
       }

       case "More_Type":{
        if(action.status) {
          const newlabelArr = state.MoreType;
          newlabelArr.push(action.payload)
          return {
              ...state,
              ...state.MoreType,
              MoreType: [...new Set(newlabelArr)]
          }
        }
        if(!action.satus) {
          const newlabelArr = state.MoreType.filter((item) => item !== action.payload)
          return {
              ...state,
              ...state.MoreType,
              MoreType: [...new Set(newlabelArr)]
          }
        }
       }
        
        default:
            return state;
    }
        
}

export default FilterReducer;