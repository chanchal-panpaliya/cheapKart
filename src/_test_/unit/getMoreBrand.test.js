import {getMoreBrand} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get More Brand", () => {
    // get More Brand
    it("should get More Brand", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Beauty, Toys & More")
        let Brand = "Lakme"
        const expectedState =  getdatalist.filter((item)=> Brand.includes(item.Brand))
        const state = getMoreBrand(getdatalist,"Beauty, Toys & More",Brand)
        expect(state).toEqual(expectedState); 
    })
})