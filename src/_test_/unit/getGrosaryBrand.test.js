import {getGrosaryBrand} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get Grosary Type", () => {
    // get Grosary Type
    it("should get Grosary Type", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Grocery")
        let brand = "Pillsbury"
        const expectedState =  getdatalist.filter((item)=> brand.includes(item.Brand))
        const state = getGrosaryBrand(getdatalist,"Grocery",brand)
        expect(state).toEqual(expectedState); 
    })
})