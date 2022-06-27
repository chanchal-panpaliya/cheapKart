import {getMoreType} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get More Type", () => {
    // get More type
    it("should get More Type", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Beauty, Toys & More")
        let type = "Creme"
        const expectedState =  getdatalist.filter((item)=> type.includes(item.type))
        const state = getMoreType(getdatalist,"Beauty, Toys & More",type)
        expect(state).toEqual(expectedState); 
    })
})