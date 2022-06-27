import {AddressReducer} from '../../my-web/context/address/addressReducer';

const InitialReducerState = {
    addressItem : [
        {
            id:1,
            FirstName: "Chanchal",
            LastName : "Panpaliya",
            Emailid : "chanchal.panpaliya@gmail.com",
            MobileNumber : 8600615437,
            Address : "Ruston colony , Chinchwad ",
            State:"Maharashtra",
            City:"Pune",
            ZipPostal:444033
        },
        {
            id:2,
            FirstName: "Mayur",
            LastName : "Panpaliya",
            Emailid : "mayur.panpaliya@gmail.com",
            MobileNumber : 8606154751,
            Address : "Ruston colony , Chinchwad ",
            State:"Maharashtra",
            City:"Pune",
            ZipPostal:444033
        }
    ],
    billingItem:[]
}


describe("testing address reducer", () => {
    //ADD_ADDRESS
    it("should set the ADD_ADDRESS", () => {  

        let data = {
            id:3,
            FirstName: "Mayur",
            LastName : "Panpaliya",
            Emailid : "mayur.panpaliya@gmail.com",
            MobileNumber : 8606154751,
            Address : "Ruston colony , Chinchwad ",
            State:"Maharashtra",
            City:"Pune",
            ZipPostal:444033
       }

        const expectedState = {
            ...InitialReducerState ,
            addressItem : [...InitialReducerState.addressItem , data]
        }

        const state = AddressReducer(InitialReducerState, {
            type: "ADD_ADDRESS",
            payload : data
        });
       
        expect(state).toEqual(expectedState); 
    })

    //Edit_ADDRESS
    it("should set the Edit_ADDRESS", () => {  

        let data = {
            id:2,
            FirstName: "Mayur",
            LastName : "Panpaliya",
            Emailid : "mayur.panpaliya@gmail.com",
            MobileNumber : 100000000,
            Address : "Ruston colony , Chinchwad ",
            State:"Maharashtra",
            City:"Pune",
            ZipPostal:444033
       }

        const expectedState = {
            ...InitialReducerState ,
            addressItem : [...InitialReducerState.addressItem.map((item)=>item.id === data.id?data:item)]
        }

        const state = AddressReducer(InitialReducerState, {
            type: "Edit_ADDRESS",
            payload : data
        });
       
        expect(state).toEqual(expectedState); 
    })

    //Delete_ADDRESS
    it("should set the Delete_ADDRESS", () => {  

        const expectedState = {
            ...InitialReducerState ,
            addressItem : InitialReducerState.addressItem.filter((item)=>item.id!==1)
        }

        const state = AddressReducer(InitialReducerState, {
            type: "Delete_ADDRESS",
            payload : 1
        });
       
        expect(state).toEqual(expectedState); 
    })

    //billingItem
    it("should set the billingItem", () => {  

        let data = {
            id:3,
            FirstName: "Mayur",
            LastName : "Panpaliya",
            Emailid : "mayur.panpaliya@gmail.com",
            MobileNumber : 8606154751,
            Address : "Ruston colony , Chinchwad ",
            State:"Maharashtra",
            City:"Pune",
            ZipPostal:444033
       }

        const expectedState = {
            ...InitialReducerState ,
            billingItem : data
        }

        const state = AddressReducer(InitialReducerState, {
            type: "Billing_Address",
            payload : data
        });
       
        expect(state).toEqual(expectedState); 
    })
});
