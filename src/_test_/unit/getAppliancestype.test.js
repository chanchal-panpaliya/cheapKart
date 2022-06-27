import {getAppliancestype} from '../../my-web/pages/ProductList/utlities';
import {products} from '../../backend/db/products';

const InitialReducerState = [...products]

describe("testing get Electronics type", () => {
    // get Electronics type
    it("should get Electronics type", () => {  
        let getdatalist = InitialReducerState.filter(item=>item.categoryName==="Appliances")
        let type= "Vacuum Cleaner"
        const expectedState =  getdatalist.filter((item)=> type.includes(item.type))
        const state = getAppliancestype(getdatalist,"Appliances",type)
        expect(state).toEqual(expectedState); 
    })
})