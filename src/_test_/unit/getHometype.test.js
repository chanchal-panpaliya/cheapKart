import {getHometype} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get Electronics type", () => {
    // get Electronics type
    it("should get Electronics type", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Home")
        let type= "Bedsheet"
        const expectedState =  getdatalist.filter((item)=> type.includes(item.type))
        const state = getHometype(getdatalist,"Home",type)
        expect(state).toEqual(expectedState); 
    })
})

