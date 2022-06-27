import {getFashionColor} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get Fashion Type", () => {
    // get Fashion Type
    it("should get Fashion Type", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Fashion")
        let color = "Multicolor"
        const expectedState =  getdatalist.filter((item)=> color.includes(item.Color))
        const state = getFashionColor(getdatalist,"Fashion",color)
        expect(state).toEqual(expectedState); 
    })
})