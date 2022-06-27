import {getFashionType} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get Fashion Type", () => {
    // get Fashion Type
    it("should get Fashion Type", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Fashion")
        let type = "Top"
        const expectedState =  getdatalist.filter((item)=> type.includes(item.FashionType))
        const state = getFashionType(getdatalist,"Fashion",type)
        expect(state).toEqual(expectedState); 
    })
})