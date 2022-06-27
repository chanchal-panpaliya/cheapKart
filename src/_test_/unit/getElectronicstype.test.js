import {getElectronicstype} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get Electronics type", () => {
    // get Electronics type
    it("should get Electronics type", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Electronics")
        let type = "iPad"
        const expectedState =  getdatalist.filter((item)=> type.includes(item.Electronics_type))
        const state = getElectronicstype(getdatalist,"Electronics",type)
        expect(state).toEqual(expectedState); 
    })
})