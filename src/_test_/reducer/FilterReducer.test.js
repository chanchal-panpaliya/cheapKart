import FilterReducer from "../../my-web/context/Filterdata/FilterReducer";

const InitialReducerState={
    sortBy: "",
    ram: { _4GB: false, _6GB: false , _12GB:false , _32GB:false },
    rom: { _32GB: false, _64GB: false , _128GB:false , _256GB:false },
    expandableMemory:"",
    price: 100000,
    discount: "",
    rating:"",
    productName: "",
    extraoff:"",
    GrosaryType:["Cookies","Snacks","Candy","Baby","Breakfast","Soups"],
    GrosaryBrand:["Global Fresh Market","Budget Foods","Dollar Pantry","Food Festive"],
    FashionType:["Casual","Artsy","Bohemian"],
    FashionColor:["Black","Blue","Red","Orange"],
    Electronicstype:["Mobile","Wearables","Laptops","Printers"],
    Hometype:["dish","TABLEWARE","KITCHENWARE"],
    Appliancestype:["Refrigeration","Freezer","Air Ventilator","Air conditioner"],
    MoreBrand:["Van","Park","Allen"],
    MoreType:["abcd","efg"]
}

describe("testing FilterReducer", () => {
    //sort filter low to hight
        it("should set the sort filter low to hight", () => {
            const expectedState = {
                ...InitialReducerState,
                sortBy : "LOW_TO_HIGH"
            }
            const state = FilterReducer(InitialReducerState, {
                type: "LOW_TO_HIGH",
            });
            expect(state).toEqual(expectedState);
        });
    //sort filter heigh to low
        it("should set the sort filter heigh to low", () => {
            const expectedState = {
                ...InitialReducerState,
                sortBy : "HIGH_TO_LOW"
            }
            const state = FilterReducer(InitialReducerState, {
                type: "HIGH_TO_LOW",
            });
            expect(state).toEqual(expectedState);
        });  
    //ram 4gb - Mobile_RAM_4GB , 6gb - Mobile_RAM_6GB , 12gb - Mobile_RAM_12GB , 32gb - Mobile_RAM_32GB
        it("should set the ram filter", () => {
            const expectedState = {
                ...InitialReducerState,
                ram: { _4GB: true, _6GB: false , _12GB:false , _32GB:false }
            }
            const state = FilterReducer(InitialReducerState, {
                type: "Mobile_RAM_4GB",
            });
            expect(state).toEqual(expectedState);
        });
    //rom 32 - Mobile_ROM_32GB , 64 - Mobile_ROM_64GB , 128 - Mobile_ROM_128GB , 236 - Mobile_ROM_256GB
        it("should set the rom filter", () => {
            const expectedState = {
                ...InitialReducerState,
                rom: { _32GB: true, _64GB: false , _128GB:false , _256GB:false }
            }
            const state = FilterReducer(InitialReducerState, {
                type: "Mobile_ROM_32GB",
            });
            expect(state).toEqual(expectedState);
        });
    //expandableMemory 512GB , 1 TB
        it("should set the expandableMemory filter", () => {
            const expectedState = {
                ...InitialReducerState,
                expandableMemory:'512GB'
            }
            const state = FilterReducer(InitialReducerState, {
                type: "ExpandableMemory",
                value: "512GB"
            });
            expect(state).toEqual(expectedState);
        });
    //price
        it("should set the price filter", () => {
            const expectedState = {
                ...InitialReducerState,
                price:500
            }
            const state = FilterReducer(InitialReducerState, {
                type: "PRICE",
                payload: 500
            });
            expect(state).toEqual(expectedState);
        });
    //discount 50,40,30,20
        it("should set the discount filter", () => {
            const expectedState = {
                ...InitialReducerState,
                discount:50
            }
            const state = FilterReducer(InitialReducerState, {
                type: "DISCOUNT",
                value: 50
            });
            expect(state).toEqual(expectedState);
        });
    //rating 5,4,3,2,1
        it("should set the rating filter", () => {
            const expectedState = {
                ...InitialReducerState,
                rating:5
            }
            const state = FilterReducer(InitialReducerState, {
                type: "RATING",
                value: 5
            });
            expect(state).toEqual(expectedState);
        });

   //productName
        it("should set the search Product", () => {
            const expectedState = {
                ...InitialReducerState,
                productName:"okok123"
            }
            const state = FilterReducer(InitialReducerState, {
                type: "SEARCH_PRODUCTS",
                payload: "okok123"
            });
            expect(state).toEqual(expectedState);
        });
    //extraoff 0 - 10 , 10 - 50 , 50 - 200 , 200 - 10000
        it("should set the EXTRAOFF Product", () => {
            const expectedState = {
                ...InitialReducerState,
                extraoff:"0 - 10"
            }
            const state = FilterReducer(InitialReducerState, {
                type: "EXTRAOFF",
                value: "0 - 10"
            });
            expect(state).toEqual(expectedState);
        });
    //GrosaryType checked
    it("should set the Grosary Type Product checked", () => {
        let data = "chocolate"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "GROSARY_TYPE",
            payload: data,
            status:true
        });
        expect(state).toEqual(expectedState);
    });
     //GrosaryType unchecked
     it("should set the Grosary Type Product unchecked", () => {
        let data = "chocolate"
        const expectedState = {
            ...InitialReducerState ,
            GrosaryType : [...InitialReducerState.GrosaryType.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "GROSARY_TYPE",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
    //GROSARY_BRAND checked
    it("should set the GROSARY_BRAND Product checked", () => {
        let data = "Global"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "GROSARY_BRAND",
            payload: data,
            status:true
        });

        expect(state).toEqual(expectedState);
    });
     //GROSARY_BRAND unchecked
     it("should set the GROSARY_BRAND Product unchecked", () => {
        let data = "Global Fresh Market"
        const expectedState = {
            ...InitialReducerState ,
            GrosaryBrand : [...InitialReducerState.GrosaryBrand.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "GROSARY_BRAND",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
     //FashionType checked
     it("should set the FashionType Product checked", () => {
        let data = "Global"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Fashion_Type",
            payload: data,
            status:true
        });

        expect(state).toEqual(expectedState);
    });
     //FashionType unchecked
     it("should set the FashionType Product unchecked", () => {
        let data = "Black"
        const expectedState = {
            ...InitialReducerState ,
            FashionType : [...InitialReducerState.FashionType.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Fashion_Type",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
     //FashionColor checked
     it("should set the FashionType Product checked", () => {
        let data = "Pink"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Fashion_Color",
            payload: data,
            status:true
        });

        expect(state).toEqual(expectedState);
    });
     //FashionColor unchecked
     it("should set the FashionType Product unchecked", () => {
        let data = "Black"
        const expectedState = {
            ...InitialReducerState ,
            FashionColor : [...InitialReducerState.FashionColor.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Fashion_Color",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
      //Electronicstype checked
      it("should set the Electronicstype Product checked", () => {
        let data = "TV"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Electronics_type",
            payload: data,
            status:true
        });

        expect(state).toEqual(expectedState);
    });
     //Electronicstype unchecked
     it("should set the Electronicstype Product unchecked", () => {
        let data = "Mobile"
        const expectedState = {
            ...InitialReducerState ,
            Electronicstype : [...InitialReducerState.Electronicstype.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Electronics_type",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
     //Hometype checked
     it("should set the Hometype Product checked", () => {
        let data = "spoons and forks"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Home_type",
            payload: data,
            status:true
        });

        expect(state).toEqual(expectedState);
    });
     //Hometype unchecked
     it("should set the Hometype Product unchecked", () => {
        let data = "Mobile"
        const expectedState = {
            ...InitialReducerState ,
            Hometype : [...InitialReducerState.Hometype.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Home_type",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
     //Appliancestype checked
     it("should set the Appliancestype Product checked", () => {
        let data = "TV"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Appliances_type",
            payload: data,
            status:true
        });

        expect(state).toEqual(expectedState);
    });
     //Appliancestype unchecked
     it("should set the Appliancestype Product unchecked", () => {
        let data = "Air conditioner"
        const expectedState = {
            ...InitialReducerState ,
            Appliancestype : [...InitialReducerState.Appliancestype.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "Appliances_type",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
    //MoreBrand checked
    it("should set the MoreBrand Product checked", () => {
        let data = "Nike"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "More_Brand",
            payload: data,
            status:true
        });

        expect(state).toEqual(expectedState);
    });
     //MoreBrand unchecked
     it("should set the MoreBrand Product unchecked", () => {
        let data = "Allen"
        const expectedState = {
            ...InitialReducerState ,
            MoreBrand : [...InitialReducerState.MoreBrand.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "More_Brand",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
      //MoreType checked
      it("should set the MoreType Product checked", () => {
        let data = "pqwre"
        const expectedState = {
           ...InitialReducerState
        }
        const state = FilterReducer(InitialReducerState, {
            type: "More_Type",
            payload: data,
            status:true
        });

        expect(state).toEqual(expectedState);
    });
     //MoreType unchecked
     it("should set the MoreType Product unchecked", () => {
        let data = "abcd"
        const expectedState = {
            ...InitialReducerState ,
            MoreType : [...InitialReducerState.MoreType.filter((item)=>item!==data)]
        }
        const state = FilterReducer(InitialReducerState, {
            type: "More_Type",
            payload: data,
            status:false
        });
        expect(state).toEqual(expectedState);
    });
    //
})