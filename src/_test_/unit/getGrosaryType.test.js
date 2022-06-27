import {getGrosaryType} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get Grosary Type", () => {
    // get Grosary Type
    it("should get Grosary Type", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Grocery")
        let type = "Whole-Wheat Flour"
        const expectedState =  getdatalist.filter((item)=> type.includes(item.Type))
        const state = getGrosaryType(getdatalist,"Grocery",type)
        expect(state).toEqual(expectedState); 
    })
})